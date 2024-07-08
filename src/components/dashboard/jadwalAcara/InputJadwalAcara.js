"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export function InputJadwalAcara() {
  const queryClient = useQueryClient();
  const [inputs, setInputs] = useState({
    nama_pasangan: "",
    tanggal: "",
    tempat: "",
    keterangan: "",
  });
  const [isActive, setIsActive] = useState(false);

  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const mutation = useMutation({
    mutationFn: async (input) => {
      return await axios.post("/api/jadwal-acara", input);
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    mutation.mutate(inputs, {
      onSuccess: () => {
        queryClient.invalidateQueries(["jadwalAcara"]);
        setInputs({});
        setIsActive(false);
      },
    });
  };

  return (
    <Dialog onOpenChange={() => setIsActive(!isActive)} open={isActive}>
      <DialogTrigger asChild>
        <Button variant="outline" className="my-4">
          Input
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Input Jadwal Acara</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="nama_pasangan" className="text-right">
              Nama Pasangan
            </Label>
            <Input
              name="nama_pasangan"
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="tanggal" className="text-right">
              Tanggal
            </Label>
            <Input
              type="date"
              name="tanggal"
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="tempat" className="text-right">
              Tempat
            </Label>
            <Input
              name="tempat"
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="keterangan" className="text-right">
              Keterangan
            </Label>
            <Input
              name="keterangan"
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            disabled={mutation.isLoading}
            onClick={handleSubmit}
          >
            Simpan
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
