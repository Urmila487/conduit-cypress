describe('Login', function () {
    
    Cypress.config('pageLoadTimeout',10000)
    
    before(function () {
        cy.Signin()

    })

    it('Create Post', function () {
        //cy.contains('New Post').click()
        cy.get('ul.navbar-nav').children().contains('New Post').click()
        cy.hash().should('include', '#/editor')
        cy.location('hash').should('include', '#/editor')

        cy.get('form').within(($form) => {
            cy.get('input').first().should('be.visible').should('be.enabled').type('Cypress Automation')
            cy.get('input').eq(1).should('be.visible').should('be.enabled').type('This Article about Cypress Automation')
            cy.get('textarea').first().should('be.visible').type('My best article ever')
            cy.get('input').eq(2).type('Cypress')
            cy.contains('Publish Article').click()
            
        })
        
        cy.url().should('include', 'article')
    })


    it('Mark UnMark as Favorite', function () {
        cy.get('ul.navbar-nav').children().contains('Urmila').click()
        //cy.get('.nav-link').contains('Urmila').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').first().click()
        cy.contains('Favorited Articles').click()
        cy.url().should('include', 'favorites')
        cy.get('.ion-heart',{timeout:10000}).first().click()
        cy.reload()
        cy.contains('No articles are here... yet.',{timeout:10000}).should('be.visible')
        cy.go('back')  //cy.go(-1)
        //cy.go('forward')  //cy.go(1)



    })
})