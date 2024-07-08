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

export function InputBudget() {
  const queryClient = useQueryClient();
  const [inputs, setInputs] = useState({
    nama_pasangan: "",
    tanggal: "",
    vanue: "",
    catering: "",
    pakaian: "",
    dekorasi: "",
    fotografi: "",
    undangan: "",
    musik_hiburan: "",
    transport: "",
    lainnya: "",
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
      return await axios.post("/api/budget-pernikahan", input);
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    mutation.mutate(inputs, {
      onSuccess: () => {
        queryClient.invalidateQueries(["budgetPernikahan"]);
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
      <DialogContent className="sm:max-w-[525px] max-h-[85vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>Input Budget Pernikahan</DialogTitle>
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
            <Label htmlFor="venue" className="text-right">
              Venue
            </Label>
            <Input
              name="venue"
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="catering" className="text-right">
              Catering
            </Label>
            <Input
              name="catering"
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="pakaian" className="text-right">
              Pakaian
            </Label>
            <Input
              name="pakaian"
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="dekorasi" className="text-right">
              Dekorasi
            </Label>
            <Input
              name="dekorasi"
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="fotografi" className="text-right">
              Fotografi
            </Label>
            <Input
              name="fotografi"
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="undangan" className="text-right">
              Undangan
            </Label>
            <Input
              name="undangan"
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="musik_hiburan" className="text-right">
              Musik dan Hiburan
            </Label>
            <Input
              name="musik_hiburan"
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="transport" className="text-right">
              Transport
            </Label>
            <Input
              name="transport"
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="lainnya" className="text-right">
              Lainnya
            </Label>
            <Input
              name="lainnya"
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
