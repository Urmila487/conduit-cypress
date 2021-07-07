import '@percy/cypress';
describe('Login',function(){
    it('Sign in',function(){
        cy.visit('https://react-redux.realworld.io/#/register?_k=245nu8')
        cy.percySnapshot()
        cy.get('input[type=text]').should('be.visible').should('be.enabled').type('Urmila')
        cy.get('input[type=email]').should('be.visible').should('be.enabled').type('urmila.ghadiya@gmail.com')
        cy.get('input[type=password]').should('be.visible').should('be.enabled').type('Urmi@123')
        cy.get('button[type=submit]').should('be.visible').click()
        cy.percySnapshot("After")
    })
})