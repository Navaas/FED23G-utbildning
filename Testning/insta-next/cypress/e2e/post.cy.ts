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
});
