// Seed script to create the initial admin user.
// Run with: npx prisma db seed

/* eslint-disable @typescript-eslint/no-var-requires */
const { PrismaClient } = require("@prisma/client");
const { Pool } = require("pg");
const { PrismaPg } = require("@prisma/adapter-pg");
const bcrypt = require("bcryptjs");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const email = "admin@nts.com";
  const plainPassword = "Admin@123";

  const passwordHash = await bcrypt.hash(plainPassword, 12);

  const admin = await prisma.user.upsert({
    where: { email },
    update: {
      passwordHash,
      isAdmin: true,
      name: "Admin",
    },
    create: {
      email,
      passwordHash,
      isAdmin: true,
      name: "Admin",
    },
  });

  console.log("✅ Seeded admin user:", {
    id: admin.id,
    email: admin.email,
    isAdmin: admin.isAdmin,
  });
}

main()
  .catch((e) => {
    console.error("❌ Error seeding admin user", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


