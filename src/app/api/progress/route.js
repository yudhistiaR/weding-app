import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req, res) {
  try {
    const data = await prisma.progress.findMany();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function POST(req, res) {
  try {
    const request = await req.json();
    const { tugas, tanggal_mulai, tanggal_selesai, status, catatan } = request;

    await prisma.progress.create({
      data: {
        tugas: tugas,
        tanggal_mulai: tanggal_mulai,
        tanggal_selesai: tanggal_selesai,
        status: status,
        catatan: catatan,
      },
    });

    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
