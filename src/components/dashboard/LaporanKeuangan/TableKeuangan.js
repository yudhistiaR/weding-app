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

const TableKeuangan = () => {
  const { data, isPending, isLoading } = useQuery({
    queryKey: ["jadwalAcara"],
    queryFn: () => axios.get("/api/laporan-keuangan").then((res) => res.data),
  });

  if (isLoading && isPending) return <p>Loading...</p>;

  return (
    <>
      <Table>
        <TableCaption>Laporan Keuangan</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>NO</TableHead>
            <TableHead>Kategori</TableHead>
            <TableHead>Deskripsi</TableHead>
            <TableHead>Pendapatan</TableHead>
            <TableHead>Pengeluaran</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, idx) => (
            <TableRow key={item.id}>
              <TableCell>{idx + 1}</TableCell>
              <TableCell>{item.kategori}</TableCell>
              <TableCell>{item.deskripsi}</TableCell>
              <TableCell>{item.pendapatan}</TableCell>
              <TableCell>{item.pengeluaran}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default TableKeuangan;
