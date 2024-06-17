describe("Test header and startpage", () => {
  beforeEach(() => {
    cy.task("reseed");
    cy.visit("/");
  });

  // Tester för att kolla att det finns en header-tag.
  it("Should have a header-tag", () => {
    cy.get("header").should("exist").should("be.visible"); // Kollar att det finns en header tag och att den är synlig
  });

  it("should find add new post icon and switch url", () => {
    // Kollar att ikonen är synlig och finns
    cy.get("svg.size-10.cursor-pointer.text-blue-950")
      .should("be.visible")
      .should("exist");
    // Klicka på ikonen
    cy.get("svg.size-10.cursor-pointer.text-blue-950").click();
    // Kolla att URL har ändrats efter klick
    cy.url().should("include", "/NewPostPage");
  });

  it("Should display a post with image, title and content", () => {
    cy.get("main").should("exist").should("be.visible");
    cy.wait(1000);
    cy.get("main .post-card").each(($post) => {
      cy.wrap($post).find("img").should("exist").should("be.visible");
      cy.wrap($post).find("h2").should("exist").should("be.visible");
      cy.wrap($post).find("p").should("exist").should("be.visible");
    });
  });
});
