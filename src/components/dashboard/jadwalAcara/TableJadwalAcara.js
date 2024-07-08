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
const TableJadwalAcara = () => {
  const { data, isPending, isLoading } = useQuery({
    queryKey: ["jadwalAcara"],
    queryFn: () => axios.get("/api/jadwal-acara").then((res) => res.data),
  });

  if (isLoading && isPending) return <p>Loading...</p>;

  return (
    <>
      <Table>
        <TableCaption>Jadwal acara pernikahan</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>NO</TableHead>
            <TableHead>Nama Pasangan</TableHead>
            <TableHead>Tanggal</TableHead>
            <TableHead>Tempat</TableHead>
            <TableHead>Keterangan</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, idx) => (
            <TableRow key={item.id}>
              <TableCell>{idx + 1}</TableCell>
              <TableCell>{item.nama_pasangan}</TableCell>
              <TableCell>{conversiWaktu(item.tanggal)}</TableCell>
              <TableCell>{item.tempat}</TableCell>
              <TableCell>{item.keterangan}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default TableJadwalAcara;
