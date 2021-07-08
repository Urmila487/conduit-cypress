describe('API TestCases',() => {
    Cypress.config('baseUrl','http://dummy.restapiexample.com/api/v1')

    xit('GET-read',() => {
        cy.request('GET','/employees').then((response) =>{
            expect(response).to.have.property('status',200)
            expect(response.body).to.not.have.null
            expect(response.body.data).to.have.length(24)
        })
        
    })
    
    xit('POST-Create',() => {
        const item = {"name":"test","salary":"123","age":"23"}
        cy.request('POST','/create', item)
        .its('body')
        .its('data')
        .should('include',{name:'test'})
            
    })
    
    it('PUT-Update',() => {
        const item = {"name":"test1"}
        //cy.request('PUT','/update/1', item).its('status').should('eq',200)
        cy.request({method:'PUT',url:'/update/1',body:item ,failOnStatusCode: false}).its('status').should('eq',429)
            
    })
    
    xit('GET-Update',() => {
        cy.request('GET','/update/1')
        .its('body')
        .its('data')
        .should('include',{name:'test1'})
            
    })
        
      
})