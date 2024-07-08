import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req, res) {
  try {
    const request = await req.json();
    const { email, password } = request;

    const findAccount = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!findAccount)
      return NextResponse.json(
        { error: "User account not found" },
        { status: 404 },
      );

    const pw = findAccount.password;
    const match = await bcrypt.compare(password, pw);
    console.log(match);

    if (!match) {
      return NextResponse.json(
        { error: "username or password incorrect" },
        { status: 404 },
      );
    } else {
      cookies().set("isLogin", true);
    }

    return NextResponse.json({ message: "login success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
