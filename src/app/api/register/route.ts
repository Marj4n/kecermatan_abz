import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { registerSchema } from "@/schemas/auth";
import { hash } from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password, dateOfBirth, gender } =
      registerSchema.parse(body);

    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return NextResponse.json({ message: "User already exists" });
    } else {
      const hashedPassword = await hash(password, 12);
      const newUser = await prisma.user.create({
        data: {
          name: name,
          email: email,
          password: hashedPassword,
          dateOfBirth: dateOfBirth,
          gender: gender,
        },
      });

      return NextResponse.json({ message: "User created", user: newUser });
    }
  } catch (error) {
    return NextResponse.json({ message: "Error creating user", error: error });
  }
}
