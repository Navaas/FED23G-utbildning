import { PrismaClient } from "@prisma/client";

export async function mockPosts(db: PrismaClient) {
  await db.post.upsert({
    where: { id: "clxa6ti6y000108mshs15dxx9" },
    update: {},
    create: {
      id: "clxa6ti6y000108mshs15dxx9",
      title: "Snart är det sommarledigt!",
      content: "Hoppas det blir en varm och skön sommar",
      image:
        "https://images.unsplash.com/photo-1527661591475-527312dd65f5?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      postDate: new Date(),
    },
  });
  await db.post.upsert({
    where: { id: "clxa6vagd000208ms3dr6hfyz" },
    update: {},
    create: {
      id: "clxa6vagd000208ms3dr6hfyz",
      title: "Sommar sommar sol igen",
      content: "Ska vi ta en sista minuten hit?",
      image:
        "https://images.unsplash.com/photo-1551491603-7d38b9e605f5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      postDate: new Date(),
    },
  });
  await db.post.upsert({
    where: { id: "clxa6t9hm000008ms6cfugovs" },
    update: {},
    create: {
      id: "clxa6t9hm000008ms6cfugovs",
      title: "Jag tycker om glass",
      content: "Jag vill ha glass glass glass, i stora lass, lass, lass",
      image:
        "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      postDate: new Date(),
    },
  });
}
