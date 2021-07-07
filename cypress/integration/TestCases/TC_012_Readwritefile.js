describe('Read and write file',function(){
    it('Write file',function(){
        cy.writeFile('samplefile.txt','Hello world')
        cy.writeFile('samplefile.txt',"\nI am Urmila",{flag:'a+'})

    })

    it('Read file',function(){
        cy.readFile('samplefile.txt').should('contains','Hello world')
        

    })

})
