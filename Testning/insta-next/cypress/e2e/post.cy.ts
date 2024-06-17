describe("Test to create new post", () => {
  beforeEach(() => {
    cy.task("reseed");
    cy.visit("/");
  });

  it("Should visit icon to add new post", () => {
    // Kollar att ikonen är synlig och finns
    cy.get("svg.size-10.cursor-pointer.text-blue-950")
      .should("be.visible")
      .should("exist");
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

  it("Should create new post, go to startpage and see the new post", () => {
    const newPost = {
      title: "Testinlägg",
      image:
        "https://images.unsplash.com/photo-1527661591475-527312dd65f5?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: "Detta är ett testinlägg för Cypress testning.",
    };

    cy.visit("/NewPostPage");
    cy.get("form").within(() => {
      cy.get('input[name="title"]').type(newPost.title);
      cy.get('input[name="image"]').type(newPost.image);
      cy.get('textarea[name="content"]').type(newPost.content);
    });
    cy.get("button").contains("Spara").click();
    cy.url().should("eq", Cypress.config().baseUrl + "/");
    cy.contains(newPost.title).should("be.visible");
  });

  it("Should delete a post", () => {
    cy.get("main").should("exist").should("be.visible");
    cy.wait(1000);
    cy.get("main .post-card").should("exist").should("be.visible");
    cy.get(".flex").should("exist").should("be.visible");
    cy.get('[data-cy="delete-button"]').last().click();
    // är inlägget borttaget från sidan?
    cy.contains("Jag tycker om glass").should("not.exist");
  });
});
