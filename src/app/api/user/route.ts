import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { userSchema } from "@/schemas/user";
import { hash } from "bcrypt";

export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();
    const { name, email, password, role, dateOfBirth, gender, department } =
      userSchema.parse(body);

    const hashedPassword = await hash(password, 12);
    const createdUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
        dateOfBirth: dateOfBirth,
        gender: gender,
        role: role,
        department: department,
      },
    });

    return NextResponse.json(
      {
        success: true,
        user: createdUser,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred.", message: error },
      {
        status: 500,
      }
    );
  }
}

export async function GET(req: Request, res: Response) {
  try {
    // cari user yang rolenya user saja
    const users = await prisma.user.findMany({
      where: {
        role: "user",
      },
    });

    return NextResponse.json(
      {
        users,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error getting users:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(req: Request, res: Response) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    const body = await req.json();
    const { newData } = body;

    const updatedUser = await prisma.user.update({
      where: {
        id: userId?.toString(),
      },
      data: newData,
    });

    return NextResponse.json(
      {
        success: true,
        user: updatedUser,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(req: Request, res: Response) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    await prisma.user.delete({
      where: {
        id: userId?.toString(),
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "User deleted.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      {
        status: 500,
      }
    );
  }
}
