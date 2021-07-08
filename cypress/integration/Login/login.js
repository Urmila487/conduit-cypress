Given('I open Conduit login Page', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=rgt9mrr')
  });

    When('I type in',(datatable) => {
        datatable.hashes().forEach(element => {
            cy.get('input[type=email]').type(element.username)
            cy.get('input[type=password]').type(element.password)  
    })
    
  })
      
    And('I click on Sign in button', () => {
        cy.get('.btn').contains('Sign in').should('be.visible').click()
  });

    Then('{string} should be shown', (content) => {
        cy.contains(content,{timeout:10000}).should('be.visible')
  });
        