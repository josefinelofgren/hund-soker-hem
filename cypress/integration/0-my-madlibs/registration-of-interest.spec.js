describe("Registrations of interest", () => {
  it("selects a dog and then submit the registration of interest form", () => {
    cy.visit("http://localhost:3000");

    cy.get(".navbar")
      .should("be.visible")
      .within(() => {
        cy.get(".navbar-btn").click();
      });

    cy.get(".sidebar")
      .should("be.visible")
      .within(() => {
        cy.get(".Hundarna").click();
      });

    cy.get(".available-dogs")
      .should("be.visible")
      .within(() => {
        cy.get(".read-more").first().click();
      });

    cy.get(".selected-dog")
      .should("be.visible")
      .within(() => cy.get("button").click());

    cy.get(".registration-of-interest")
      .should("be.visible")
      .within(() => {
        cy.get("form").submit();
      });
  });
});
