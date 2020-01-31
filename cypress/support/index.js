require('cypress-plugin-tab')
import "../support/commands"

beforeEach(function () {
        cy.visit('/')
        cy.login('sistemas', 'sistemas')
})

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })