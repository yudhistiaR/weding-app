"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";

const RegisterPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    await axios
      .post("/api/auth/register", user)
      .finally(() => {
        alert("User berhasil di tambahkan");
        window.location.reload();
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <>
      <div className="w-full h-screen text-black flex justify-center items-center">
        <div className="p-4 rounded-lg w-96 shadow-xl">
          <div className="text-2xl font-bold">Daftar</div>
          <div className="grid gap-4 mt-4">
            <Input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Email"
            />
            <Input
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="Password"
            />
            <Button variant="outline" type="button" onClick={handleSubmit}>
              Daftar
            </Button>
            <span className="w-full text-center">
              Sudah punya akun?{" "}
              <Link
                className="hover:text-gray-600 transition-colors duration-200 ease-in"
                href="/auth/login"
              >
                Login
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
