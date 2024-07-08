"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { conversiWaktu } from "@/lib/conversiWaktu";

const TableBudget = () => {
  const { data, isPending, isLoading } = useQuery({
    queryKey: ["budgetPernikaan"],
    queryFn: () => axios.get("/api/budget-pernikahan").then((res) => res.data),
  });

  if (isLoading && isPending) return <p>Loading...</p>;

  return (
    <>
      <Table>
        <TableCaption>Kumpulan nama tamu undangan</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>NO</TableHead>
            <TableHead>Nama Pasangan</TableHead>
            <TableHead>Tanggal</TableHead>
            <TableHead>Venue</TableHead>
            <TableHead>Catering</TableHead>
            <TableHead>Pakaian</TableHead>
            <TableHead>Dekorasi</TableHead>
            <TableHead>Fotografi</TableHead>
            <TableHead>Undangan</TableHead>
            <TableHead>Musik dan hiburan</TableHead>
            <TableHead>Transport</TableHead>
            <TableHead>Lainnya</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, idx) => (
            <TableRow key={item.id}>
              <TableCell>{idx + 1}</TableCell>
              <TableCell>{item.nama_pasangan}</TableCell>
              <TableCell>{conversiWaktu(item.tanggal)}</TableCell>
              <TableCell>{item.venue}</TableCell>
              <TableCell>{item.catering}</TableCell>
              <TableCell>{item.pakaian}</TableCell>
              <TableCell>{item.dekorasi}</TableCell>
              <TableCell>{item.fotografi}</TableCell>
              <TableCell>{item.undangan}</TableCell>
              <TableCell>{item.musik_hiburan}</TableCell>
              <TableCell>{item.transport}</TableCell>
              <TableCell>{item.lainnya}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default TableBudget;
