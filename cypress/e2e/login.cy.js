describe('Login functionality', () => {

    beforeEach(() => {
        cy.visit('https://demo.testfire.net/login.jsp');
    });

    it('TC_01 Verify the login functionality with valid credentials', () => {
        
        cy.get('input#uid').type('admin'); 
        cy.get('input#passw').type('admin');
        cy.get('input[name="btnSubmit"]').click();

        // Assertions
        cy.url().should('include', '/main.jsp'); 
        cy.get('body').should('contain.text', 'Congratulations'); 


    });

    it('TC_02 Verify the login functionality with invalid credentials', () => {
        
        cy.get('input#uid').type('hjhd');
        cy.get('input#passw').type('hdksmm');
        cy.get('input[name="btnSubmit"]').click();
        //Assertions
        cy.url().should('include', 'login.jsp'); 
        cy.contains('Login Failed').should('be.visible'); 
    });

    it('TC_03 Verify the login functionality with empty credentials', () => {
        
        cy.get('input[name="btnSubmit"]').click();

        //Assertions
        cy.url().should('include', 'login.jsp'); 
        cy.contains('Online Banking Login').should('be.visible'); 
    });

});
