describe("Launches app with landing page", () => {
  it("loads successfully", () => {
    cy.visit("http://localhost:3000");

    cy.get(".navbar")
      .should("be.visible")
      .within(() => {
        cy.get(".navbar-brand").should("contain.text", "Paw Patrol");
      });

    cy.get(".header")
      .should("be.visible")
      .within(() => {
        cy.get("h1").should("contain.text", "Möt din match");
        cy.get("p").should("contain.text", "Låt oss sköta matchningen");
      });
  });
});
