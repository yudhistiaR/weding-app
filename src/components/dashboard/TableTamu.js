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

const TableTamu = () => {
  const { data, isPending, isLoading } = useQuery({
    queryKey: ["tamu"],
    queryFn: () => axios.get("/api/daftar-tamu").then((res) => res.data),
  });

  if (isLoading && isPending) return <p>Loading...</p>;

  return (
    <>
      <Table>
        <TableCaption>Kumpulan nama tamu undangan</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>NO</TableHead>
            <TableHead>Nama Tamu Undangan</TableHead>
            <TableHead>Nomor Meja</TableHead>
            <TableHead>Keterangan</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, idx) => (
            <TableRow key={item.id}>
              <TableCell>{idx + 1}</TableCell>
              <TableCell>{item.nama_tamu}</TableCell>
              <TableCell>{item.nomor_meja}</TableCell>
              <TableCell>{item.keterangan}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default TableTamu;
