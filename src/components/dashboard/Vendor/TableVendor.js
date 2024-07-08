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
const TableVendor = () => {
  const { data, isPending, isLoading } = useQuery({
    queryKey: ["daftarVendor"],
    queryFn: () => axios.get("/api/daftar-vendor").then((res) => res.data),
  });

  if (isLoading && isPending) return <p>Loading...</p>;

  return (
    <>
      <Table>
        <TableCaption>Daftar Vendor</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>NO</TableHead>
            <TableHead>Jenis Vendor</TableHead>
            <TableHead>Nama Vendor</TableHead>
            <TableHead>Kontak</TableHead>
            <TableHead>Harga</TableHead>
            <TableHead>catatan</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, idx) => (
            <TableRow key={item.id}>
              <TableCell>{idx + 1}</TableCell>
              <TableCell>{item.jenis_vendor}</TableCell>
              <TableCell>{item.nama_vendor}</TableCell>
              <TableCell>{item.kontak}</TableCell>
              <TableCell>{item.harga}</TableCell>
              <TableCell>{item.catatan}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default TableVendor;
