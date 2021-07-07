import '@percy/cypress';
describe('Login',function(){
    it('Sign in',function(){
        cy.percySnapshot()
        cy.visit('https://react-redux.realworld.io/#/login?_k=rgt9mrr')
        cy.title().should('eq','Conduit')
        cy.location('protocol').should('eq','https:')
        cy.get('input[type=email]').should('be.visible').should('be.enabled').type('urmila.ghadiya@gmail.com')
        cy.get('input[type=password]').should('be.visible').should('be.enabled').type('Urmi@123')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
        cy.contains('Your Feed',{timeout:10000}).should('be.visible')
        cy.percySnapshot("After")
    })

    it('Create Post',function(){
        cy.contains('New Post').click()
        cy.hash().should('include','#/editor')
        cy.location('hash').should('include','#/editor')
        cy.get('input[placeholder="Article Title"]').should('be.visible').should('be.enabled').type('Cypress Automation')
        cy.get('input[placeholder="What\'s this article about?"]').should('be.visible').should('be.enabled').type('This Article about Cypress Automation')
        cy.get('textarea[placeholder="Write your article (in markdown)"]').should('be.visible').type('My best article ever')
        cy.get('input[placeholder="Enter tags"]').type('Cypress')
        cy.contains('Publish Article').click()
        cy.url().should('include','article')
    })


    it('Mark UnMark as Favorite',function(){
        cy.get('.nav-link').contains('Urmila').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').click()
        cy.contains('Favorited Articles').click()
        cy.url().should('include','favorites')
        cy.get('.ion-heart').click()
        cy.reload()
        cy.contains('No articles are here... yet.').should('be.visible')
        //cy.go('back')  //cy.go(-1)
        //cy.go('forward')  //cy.go(1)



    })
})