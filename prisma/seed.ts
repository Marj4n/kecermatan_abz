import { Gender, PrismaClient, Role } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

async function seedUsers() {
  const usersData = [
    {
      email: "test@test.com",
      name: "test nih ngaps",
      gender: Gender.Male,
      password: "test",
    },
    {
      email: "admin@admin.com",
      name: "admin nih ngaps",
      gender: Gender.Male,
      role: Role.admin,
      password: "admin123",
    },
    {
      email: "user@user.com",
      name: "User nih ngaps",
      gender: Gender.Male,
      password: "user123",
    },
  ];

  for (const userData of usersData) {
    const { email, name, gender, role, password } = userData;
    const hashedPassword = await hash(password, 12);

    await prisma.user.upsert({
      where: { email },
      update: {},
      create: {
        email,
        name,
        gender,
        role,
        password: hashedPassword,
      },
    });
  }
}

async function main() {
  try {
    await seedUsers();
    console.log("Seeder selesai");
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
