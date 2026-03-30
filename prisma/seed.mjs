import { PrismaClient, Role } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    throw new Error(
      "Missing ADMIN_EMAIL or ADMIN_PASSWORD. Add both in your environment before running the seed.",
    );
  }

  const hashedPassword = await bcrypt.hash(adminPassword, 12);

  const adminUser = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {
      password: hashedPassword,
      role: Role.ADMIN,
      name: "Admin",
    },
    create: {
      email: adminEmail,
      password: hashedPassword,
      role: Role.ADMIN,
      name: "Admin",
    },
  });

  console.log(`✅ Seeded admin user: ${adminUser.email}`);
}

main()
  .catch((error) => {
    console.error("❌ Seed failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
