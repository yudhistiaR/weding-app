import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req, res) {
  try {
    const data = await prisma.jadwalAcara.findMany();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function POST(req, res) {
  try {
    const request = await req.json();
    const { nama_pasangan, tanggal, tempat, keterangan } = request;

    await prisma.jadwalAcara.create({
      data: {
        nama_pasangan: nama_pasangan,
        tanggal: new Date(tanggal),
        tempat: tempat,
        keterangan: keterangan,
      },
    });

    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
