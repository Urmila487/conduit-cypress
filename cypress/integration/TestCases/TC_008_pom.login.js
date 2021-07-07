import Login from '../pageObjects/login'   //here Login should be take new const object 

describe('Login',function(){
    const login = new Login()   ////here Login() should be new const object 


    it('Sign in',function(){
        cy.visit('https://react-redux.realworld.io/#/login?_k=rgt9mrr')
        login.email().should('be.visible').should('be.enabled').type('urmila.ghadiya@gmail.com')
        login.password().should('be.visible').should('be.enabled').type('Urmi@123')
        login.signin().should('be.visible').click()
    
    })
})