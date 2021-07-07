describe('Sign in',function(){

    beforeEach(function(){
        cy.fixture('userloginDetails').as('user')
    })

    it('Sign in',function(){
        cy.visit('https://react-redux.realworld.io/#/login?_k=rgt9mrr')
        cy.get('input[type=email]').should('be.visible').should('be.enabled').type(this.user.email)
        cy.get('input[type=password]').should('be.visible').should('be.enabled').type(this.user.password)
        cy.get('.btn').contains('Sign in').should('be.visible').click()
  
    })
})