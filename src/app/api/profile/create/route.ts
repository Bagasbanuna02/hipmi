import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  if (req.method === "POST") {
    const body = await req.json();
    // console.log(body)

    await prisma.profile.create({
      data: {
        userId: body.userId,
        name: body.name,
        email: body.email,
        alamat: body.alamat,
        jenisKelamin: body.jenisKelamin,
      },
    });

    return NextResponse.json({ status: 201, success: true });
  }
  return NextResponse.json({ success: false });
}
