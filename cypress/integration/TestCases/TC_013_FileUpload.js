Cypress.config('pageLoadTimeout', 100000)
describe('File upload',() => {
    it('File upload', () => {
        cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')
        //upload file
        //const fileName = 'collection.json';
        //cy.fixture(fileName).then(fileContent => {
             //cy.get('[type="file"]').attachFile(fileName)
        cy.get('[type="file"]').attachFile('collection.json');
        cy.get('[type="submit"]').click()
        cy.contains('You\'ve uploaded a file. Your notes on the file were:')
    })
})