describe("Test to create new post", () => {
  beforeEach(() => {
    cy.exec("npm run reset && npm run seed");
  });

  it("Should visit icon to add new post", () => {
    cy.visit("/");
    cy.get("header").should("exist").should("be.visible"); // Kollar att det finns en header tag och att den är synlig
    cy.get("span").contains("➕").click(); // Leta efter en knapp som innehåller texten "Spara" och klicka på den
  });
  it("Should visit new url", () => {
    cy.visit("/");
    cy.get("header").should("exist").should("be.visible");
    cy.url().then((initialUrl) => {
      cy.get("span").contains("➕").click();
      // Vänta på att URL:en ska uppdateras
      cy.wait(1000);
      // Hämta den nya URL:en efter att knappen har klickats på
      cy.url().should("not.eq", initialUrl);
    });
  });
  it("Should create new post", () => {
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
    });
  });
});
