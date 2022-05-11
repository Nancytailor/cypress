/// <reference types="cypress" />

describe('Testing Netflix Log In Page', () => {
  
    it('Test Netflix login empty form', () => {
        cy.visit('https://www.netflix.com/in/')
        cy.contains('Sign In').click();

        cy.get('#id_userLoginId');
        cy.get('#id_password');

        cy.get('button')
          .contains('Sign In')
          .click();
  
        cy.get('.inputError').contains('Please enter a valid email address or phone number.');
        cy.get('.inputError').contains('Your password must contain between 4 and 60 characters.');

        cy.get('.hybrid-login-form-help [type="checkbox"]')
          .not('[disabled]')
          .check()
          .should('be.checked');

          // cy.get('.hybrid-login-form-help [type="checkbox"]')
          // .not('[disabled]')
          // .check()
          // .should('not.be.checked');

        cy.get('.login-signup-now > a').contains('Sign up now').click({force: true});
    })

    it('User account not found', () => {
          cy.visit('https://www.netflix.com/in/');
          cy.contains('Sign In').click();
  
          cy.get('#id_userLoginId').type('Nancy.com', {force: true});
          cy.get('#id_password').type('Nancy@1267', {force: true});
  
          cy.get('.btn.login-button.btn-submit.btn-small[type="submit"]').click();
  
          cy.get('.ui-message-contents').contains('Sorry, we can\'t find an account with this email address. Please try again or ')
          cy.get('a').contains('create a new account').click();
        })
      
  
        
      it('Verify email should contains minimum 5 alphabets and password should contains minimum 4 alphabets', () => {
          cy.visit('https://www.netflix.com/in/');
          cy.contains('Sign In').click();
  
          cy.get('#id_userLoginId').type('nanc', {force: true})
  
          
          cy.get('#id_password').type('nan', {force: true});
          cy.get('.btn.login-button.btn-submit.btn-small[type="submit"]').click();
  
          cy.get('.inputError').contains('Please enter a valid email address.')
          cy.get('.inputError').contains('Your password must contain between 4 and 60 characters.')
      })
  
      it('Verify user id which contains invalid password', () => {
        cy.visit('https://www.netflix.com/in/');
        cy.contains('Sign In').click();
  
        cy.get('#id_userLoginId').type('nancy@gmail.com', {force: true})
        
        cy.get('#id_password').type('nancy', {force: true});
        
        cy.get('.btn.login-button.btn-submit.btn-small[type="submit"]').click();
  
        cy.get('.ui-message-contents > b').contains('Incorrect password.')
        cy.get('.ui-message-contents').contains(' Please try again or you can ')
        cy.get('.ui-message-contents > a').contains('reset your password.')
    })
  
    //   /*
    // For valid user only 
      it('Successfully logged in', () => {
          cy.visit('https://www.netflix.com/in/');
          cy.contains('Sign In').click();
          
          cy.get('#id_userLoginId').type('yonain59@gmail.com', {force: true})
          
          cy.get('#id_password').type('yonainnn4838', {force: true});
  
          cy.get('.btn.login-button.btn-submit.btn-small[type="submit"]').click();
  
        //   cy.get('.stepTitle').contains('Welcome back!')
          cy.get('.our-story-welcome-back').contains('Welcome back!')

      })
    //   */
  
  })