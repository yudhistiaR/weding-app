import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcryp from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req, res) {
  try {
    const request = await req.json();
    const { email, password } = request;
    const hashPassword = await bcryp.hash(password, 10);

    await prisma.user.create({
      data: {
        email: email,
        password: hashPassword,
      },
    });

    return NextResponse.json({ message: "user created" });
  } catch (error) {
    return NextResponse.json({ error: "error" });
  }
}
