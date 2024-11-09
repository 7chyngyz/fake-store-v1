import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const myid = cookies().get("user_id")?.value;

    if (!myid) {
      return NextResponse.json({ message: "id is not found" }, { status: 404 });
    }

    const idNumber = Number(myid);
    if (isNaN(idNumber)) {
      return NextResponse.json(
        { message: "id is not a number" },
        { status: 400 }
      );
    }

    const me = await prisma.user.findUnique({
      where: {
        id: idNumber,
      },
    });

    if (!me) {
      return NextResponse.json(
        { message: "User is not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(me);
  } catch (error) {
    return NextResponse.json(
      { message: "The server error", error: error },
      { status: 500 }
    );
  }
};

// export const DELETE = async () => {
//   try {
//     const data = await prisma.user.delete({
//       where: {
//         id: me,
//       },
//     });
//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json(error);
//   }
// };
