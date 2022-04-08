let question2 = Math.floor(Math.random() * 3) + 1;
let question3 = Math.floor(Math.random() * 4) + 1;
let question4 = Math.floor(Math.random() * 2) + 1;
let question5 = Math.floor(Math.random() * 3) + 1;

describe('Find matches', () => {
    it('finds matches based on the users answers', () => {
        cy.visit('http://localhost:3000')

        cy.get('.header')
          .should('be.visible')
          .within(() => {
              cy.get('button').click()
          })

        cy.get('.find-match')
          .should('be.visible')
          .within(() => {
            cy.get('#question-1-option-2').click()
            cy.get('#question-2-option-1')
              .should('be.visible')
            cy.get('#question-2-option-2')
              .should('be.visible')
            cy.get(`#question-2-option-${question2}`).click()
            cy.get(`#question-3-option-${question3}`).click()
            cy.get(`#question-4-option-${question4}`).click()
            cy.get(`#question-5-option-${question5}`).click()
            cy.get('.submit')
               .within(() => {
                 cy.get('button').click()
            })
          })

        cy.get('.matched-dogs')
          .should('be.visible')
          .within(() => {
            cy.get('.title')
              .should('contain.text', 'Dina matchningar')
          })
    })
})