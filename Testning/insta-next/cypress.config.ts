import { defineConfig } from "cypress";
import { db } from "./prisma/db";
import { mockPosts } from "./prisma/seed/posts";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3100",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        reseed,
      });
    },
  },
});

async function reseed() {
  // NEVER ALLOW THIS OUTSIDE THE TEST ENVIRONMENT!!!
  if (process.env.NODE_ENV !== "test") return;
  // Reset
  await db.post.deleteMany({});
  // Ta bort från alla tabeller

  // Seed från databasen
  await mockPosts(db);
  return null;
}
