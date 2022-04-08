describe('Opens upp the landing page', () => {
    it('loads successfully', () => {
        cy.visit('http://localhost:3000')

        cy.get('.navbar')
          .should('be.visible')
          .within(() => {
              cy.get('.navbar-brand')
                .should('contain.text', 'Paw Patrol')
          })

        cy.get('.header')
          .should('be.visible')
          .within(() => {
              cy.get('h1')
                .should('contain.text', 'Möt din match')
          })
    })
})