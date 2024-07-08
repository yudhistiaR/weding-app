import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function DELETE() {
  try {
    cookies().delete("isLogin");

    return NextResponse.json({ message: "user logout" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "error" }, { status: 500 });
  }
}
