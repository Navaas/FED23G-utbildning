describe("template spec", () => {
  beforeEach(() => {
    cy.exec("npm run reset && npm run seed");
  });

  it("passes", () => {
    cy.visit("/");
    // cy.get("button").contains("Spara").click(); // Leta efter en knapp som innehåller texten "Spara" och klicka på den
    cy.get("h1")
      .contains("Welcome to my Blog")
      .should("be.visible")
      .should("exist"); // Leta efter en h1 som innehåller texten "Welcome to my Blog" och kolla att den är synlig och existerar
  });
});
