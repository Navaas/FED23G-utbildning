import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function main() {
  await db.user.create({
    data: {
      name: "Pippi",
      posts: {
        create: [
          { title: "Mjau" },
          { title: "Walking" },
          { title: "Whats happening today?" },
        ],
      },
    },
  });
}

main()
  .then(() => {
    console.log("Success");
  })
  .catch((err) => {
    console.error(err);
  });
