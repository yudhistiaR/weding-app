import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req, res) {
  try {
    const data = await prisma.tamuUndangan.findMany();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function POST(req, res) {
  try {
    const request = await req.json();
    const { nama, nomor_meja, keterangan } = request;

    await prisma.tamuUndangan.create({
      data: {
        nama_tamu: nama,
        nomor_meja: nomor_meja,
        keterangan: keterangan,
      },
    });

    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
