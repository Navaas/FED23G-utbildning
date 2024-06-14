describe("Test header and startpage", () => {
  beforeEach(() => {
    cy.task("reseed");
  });

  // Tester för att kolla att det finns en header-tag, title och icon för att skapa en ny post
  it("Should have a header-tag, title and icon to create new post", () => {
    cy.visit("/");
    cy.get("header").should("exist").should("be.visible"); // Kollar att det finns en header tag och att den är synlig
    cy.get("span").contains("➕").click(); // Leta efter en knapp som innehåller texten "Spara" och klicka på den
    cy.get("h1").contains("Insta-next").should("be.visible").should("exist"); // Leta efter en h1 som innehåller texten "Welcome to my Blog" och kolla att den är synlig och existerar
  });

  it("Should display a post with image, title and content", () => {
    cy.visit("/");
    cy.get("main").should("exist").should("be.visible");
    cy.wait(1000);
    cy.get("main .post-card").each(($post) => {
      cy.wrap($post).find("img").should("exist").should("be.visible");
      cy.wrap($post).find("h2").should("exist").should("be.visible");
      cy.wrap($post).find("p").should("exist").should("be.visible");
    });
  });
});
