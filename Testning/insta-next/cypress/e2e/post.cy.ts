describe("Test to create new post", () => {
  beforeEach(() => {
    cy.task("reseed");
  });

  it("Should visit icon to add new post", () => {
    cy.visit("/");
    // Kollar att ikonen är synlig och finns
    cy.get("svg.size-10.cursor-pointer.text-blue-950")
      .should("be.visible")
      .should("exist");
  });
  it("should find add new post icon and switch url", () => {
    cy.visit("/");
    // Kollar att ikonen är synlig och finns
    cy.get("svg.size-10.cursor-pointer.text-blue-950")
      .should("be.visible")
      .should("exist");
    // Klicka på ikonen
    cy.get("svg.size-10.cursor-pointer.text-blue-950").click();
    // Kolla att URL har ändrats efter klick
    cy.url().should("include", "/NewPostPage");
  });
  it("Should create new post and switch to startpage", () => {
    const newPost = {
      title: "Testinlägg",
      image: "https://example.com/image.jpg",
      content: "Detta är ett testinlägg för Cypress testning.",
    };

    cy.visit("/NewPostPage");
    cy.get("form").within(() => {
      cy.get('input[name="title"]').type(newPost.title);
      cy.get('input[name="image"]').type(newPost.image);
      cy.get('textarea[name="content"]').type(newPost.content);
      cy.get("button").contains("Spara").click();
      cy.url().should("include", "/");
    });
  });
  it("Should delete a post", () => {
    cy.visit("/");
    cy.get("main").should("exist").should("be.visible");
    cy.wait(1000);
    cy.get("main .post-card").should("exist").should("be.visible");
    cy.get("svg.delete.size-6").should("exist").should("be.visible").click();
  });
});
