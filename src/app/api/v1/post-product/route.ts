import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (request: Request) => {
  const body = await request.json();
  const { image, title, price, description, color, size } = body;

  try {
    const newData = {
      image: image,
      title: title,
      price: price,
      description: description,
      color: color,
      size: size,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const data = await prisma.product.create({
      data: newData,
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error });
  }
};
