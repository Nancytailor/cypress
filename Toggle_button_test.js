/// <reference types="cypress" />

context('Actions', () => {
    it('visit',() => {
      cy.visit('https://manage.eloview.com/3.56.50')
      cy.get('#username').type('nancy592000@gmail.com')
      cy.get('#password').type('Nancyyy2075@')
      cy.get('#loginUser').click()
      cy.get('.navbar-collapse > .nav > .dropdown > .ng-isolate-scope').click()
      cy.get('[ng-if="userCapabilities.account.read"] > a').should('have.text','Account Settings').click()
      cy.get('.api-account-settings-settings-link').click()
      cy.get('.api-settings-edit-button').click()
      cy.get(':nth-child(2) > :nth-child(3) > .switch-btn > .switchery').click()
      
    })
  
})
  
