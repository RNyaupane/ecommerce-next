// pages/api/products.js

import prisma from "@/app/libs/prisma";
import serializeBigInt from "@/helper/serializeBigInt";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await prisma.products.findMany();
    const serializedProducts = serializeBigInt(products); // Convert BigInt to string
    return NextResponse.json(serializedProducts);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
