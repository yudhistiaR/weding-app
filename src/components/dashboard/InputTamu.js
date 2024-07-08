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

export function InputTamu() {
  const queryClient = useQueryClient();

  const [inputs, setInputs] = useState({
    nama: "",
    nomor_meja: "",
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
      return await axios.post("/api/daftar-tamu", input);
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    mutation.mutate(inputs, {
      onSuccess: () => {
        queryClient.invalidateQueries(["tamu"]);
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
          <DialogTitle>Input Daftar Tamu Undangan</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="nama" className="text-right">
              Nama
            </Label>
            <Input name="nama" onChange={handleChange} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="nomor_meja" className="text-right">
              Nomor Meja
            </Label>
            <Input
              type="number"
              name="nomor_meja"
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Keterangan" className="text-right">
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
