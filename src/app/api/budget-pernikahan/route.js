import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req, res) {
  try {
    const data = await prisma.budgetPernikahan.findMany();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function POST(req, res) {
  try {
    const request = await req.json();
    const {
      nama_pasangan,
      tanggal,
      venue,
      catering,
      pakaian,
      dekorasi,
      fotografi,
      undangan,
      musik_hiburan,
      transport,
      lainnya,
    } = request;

    await prisma.budgetPernikahan.create({
      data: {
        nama_pasangan: nama_pasangan,
        tanggal: new Date(tanggal),
        venue: venue,
        catering: catering,
        pakaian: pakaian,
        dekorasi: dekorasi,
        fotografi: fotografi,
        undangan: undangan,
        musik_hiburan: musik_hiburan,
        transport: transport,
        lainnya: lainnya,
      },
    });

    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
