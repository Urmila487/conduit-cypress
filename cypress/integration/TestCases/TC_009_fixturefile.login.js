describe('Sign in',function(){
    it('Sign in',function(){
        cy.visit('https://react-redux.realworld.io/#/login?_k=rgt9mrr')

        cy.fixture('userloginDetails').then((user) => {
            cy.get('input[type=email]').should('be.visible').should('be.enabled').type(user.email)
            cy.get('input[type=password]').should('be.visible').should('be.enabled').type(user.password)
            
        })

        cy.get('.btn').contains('Sign in').should('be.visible').click()

        
    })
})