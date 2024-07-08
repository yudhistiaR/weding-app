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

const TableFotoGrafi = () => {
  const { data, isPending, isLoading } = useQuery({
    queryKey: ["fotoGrafi"],
    queryFn: () => axios.get("/api/laporan-fotografi").then((res) => res.data),
  });

  if (isLoading && isPending) return <p>Loading...</p>;

  return (
    <>
      <Table>
        <TableCaption>Laporan Fotografi</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>NO</TableHead>
            <TableHead>Kategori</TableHead>
            <TableHead>Deskripsi</TableHead>
            <TableHead>Detail</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, idx) => (
            <TableRow key={item.id}>
              <TableCell>{idx + 1}</TableCell>
              <TableCell>{item.kategori}</TableCell>
              <TableCell>{item.deskripsi}</TableCell>
              <TableCell>{item.detail}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default TableFotoGrafi;
