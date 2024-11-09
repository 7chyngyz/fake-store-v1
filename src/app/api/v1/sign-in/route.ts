import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import  { User } from "@prisma/client";

export const POST = async (request: Request): Promise<Response> => {
  const { email, password }: { email: string; password: string } =
    await request.json();

  try {
    const user: User | null = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return NextResponse.json(
        { status: 404, message: "User is not found" },
        { status: 404 }
      );
    }

    const isPasswordCorrect: boolean = await bcrypt.compare(
      password,
      user.password
    );
    if (!isPasswordCorrect) {
      return NextResponse.json(
        { status: 401, message: "Incorrect password" },
        { status: 401 }
      );
    }

    const response = NextResponse.json(
      { ...user, password: undefined },
      { status: 200 }
    );
    response.cookies.set("user_id", `${user.id}`, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7,
    });
    return response;
  } catch (error) {
    console.log("Error during user login:", error);

    return NextResponse.json(
      { status: 500, message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
