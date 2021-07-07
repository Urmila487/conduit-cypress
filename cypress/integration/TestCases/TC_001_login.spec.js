import '@percy/cypress';
describe('Login',function(){
    it('Sign in',function(){
        cy.percySnapshot()
        cy.visit('https://react-redux.realworld.io/#/login?_k=rgt9mrr')
        cy.get('input[type=email]').should('be.visible').should('be.enabled').type('urmila.ghadiya@gmail.com')
        cy.get('input[type=password]').should('be.visible').should('be.enabled').type('Urmi@123')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
        cy.percySnapshot("After")
    })
})