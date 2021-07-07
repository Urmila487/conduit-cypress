describe('Sign in',function(){

    let userdetails

    beforeEach(function(){
        cy.fixture('userloginDetails').then((user) => {
            userdetails = user
    })
    })

    it('Sign in',function(){
        cy.visit('https://react-redux.realworld.io/#/login?_k=rgt9mrr')
        cy.get('input[type=email]').should('be.visible').should('be.enabled').type(userdetails.email)
        cy.get('input[type=password]').should('be.visible').should('be.enabled').type(userdetails.password)
        cy.get('.btn').contains('Sign in').should('be.visible').click()
  
    })
})