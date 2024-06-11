import { PrismaClient } from "@prisma/client";
import { mockPosts } from "./posts";

const db = new PrismaClient();

async function main() {
  await mockPosts(db);
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
