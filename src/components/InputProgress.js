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

export function InputProgress() {
  const queryClient = useQueryClient();
  const [inputs, setInputs] = useState({
    tugas: "",
    tanggal_mulai: "",
    tanggal_selesai: "",
    status: "",
    catatan: "",
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
      return await axios.post("/api/progress", input);
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    mutation.mutate(inputs, {
      onSuccess: () => {
        queryClient.invalidateQueries(["progress"]);
        setInputs({});
        setIsActive(false);
      },
    });
  };

  return (
    <Dialog onOpenChange={() => setIsActive(!isActive)} open={isActive}>
      <DialogTrigger asChild>
        <span className="w-full p-4 block font-semibold text-black hover:text-white">
          Progress Checklist
        </span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Progress Checklist</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="tugas" className="text-right">
              Tugas
            </Label>
            <Input
              name="tugas"
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="tanggal_mulai" className="text-right">
              Tanggal Mulai
            </Label>
            <Input
              type="date"
              name="tanggal_mulai"
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="tanggal_selesai" className="text-right">
              Tanggal Selesai
            </Label>
            <Input
              type="date"
              name="tanggal_selesai"
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="text-right">
              Status
            </Label>
            <Input
              name="status"
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="catatan" className="text-right">
              Catatan
            </Label>
            <Input
              name="catatan"
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
