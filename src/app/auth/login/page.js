"use client";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      const login = await axios
        .post("/api/auth/login", account)
        .catch((e) => alert(e));

      if (login) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen bg-white text-black mx-auto overflow-hidden flex justify-center items-center">
      <div className="flex w-full h-full justify-center items-center gap-9">
        <div className="">
          <Image
            src="/bg-weding.jpg"
            alt="bglogin"
            width={250 * 2}
            height={250 * 2}
          />
        </div>
        <div className="p-6 rounded-lg grid gap-2 w-96 shadow-xl">
          <h1 className="text-3xl font-bold">Login</h1>
          <Input
            name="email"
            type="email"
            onChange={handleChange}
            placeholder="Email"
          />
          <Input
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="Password"
          />
          <Button variant="outline" onClick={handleSubmit}>
            Login
          </Button>
          <span className="w-full text-center">
            Belum memiliki akun?{" "}
            <Link
              href={"/auth/register"}
              className="hover:text-gray-600 transition-colors duration-200 ease-in"
            >
              Daftar
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
