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

export function InputFotoGrafi() {
  const queryClient = useQueryClient();
  const [inputs, setInputs] = useState({
    kategori: "",
    deskripsi: "",
    detail: "",
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
      return await axios.post("/api/laporan-fotografi", input);
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    mutation.mutate(inputs, {
      onSuccess: () => {
        queryClient.invalidateQueries(["fotoGrafi"]);
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
          <DialogTitle>Input Laporan Fotografi</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="kategori" className="text-right">
              Kategori
            </Label>
            <Input
              name="kategori"
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="deskripsi" className="text-right">
              Deskripsi
            </Label>
            <Input
              name="deskripsi"
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="detail" className="text-right">
              Detail
            </Label>
            <Input
              name="detail"
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
