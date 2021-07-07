import 'cypress-file-upload';
import '@percy/cypress';

// -- This is a parent command --
Cypress.Commands.add('Signin', () => {

    cy.visit('/#/login')
        cy.title().should('eq', 'Conduit')
        cy.location('protocol').should('eq', 'https:')
        //cy.get('input[type=email]').should('be.visible').should('be.enabled').type('urmila.ghadiya@gmail.com')
        //cy.get('input[type=password]').should('be.visible').should('be.enabled').type('Urmi@123')
        //cy.get('.btn').contains('Sign in').should('be.visible').click()
        cy.get('form').within(($form) => {
            cy.get('input[type=email]').should('be.visible').should('be.enabled').type('urmila.ghadiya@gmail.com')
            cy.get('input[type=password]').should('be.visible').should('be.enabled').type('Urmi@123')
            cy.root().submit()
        })
        cy.contains('Your Feed', { timeout: 10000 }).should('be.visible')



})

