// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --


Cypress.Commands.add("login", (email, password) => {
    // const emailField = cy.get(':nth-child(3) > .col-10 > .ng-untouched > .ui-float-label > .ng-pristine');
    // emailField.clear();
    // emailField.type(email).tab().type(password);
    cy.get(':nth-child(3) > .col-10 > .ng-untouched > .ui-float-label > .ng-pristine').type('sistemas').tab().type('sistemas')
    cy.contains('button', 'Entrar').click({ force: true })
    cy.wait(7000)
 })
 

// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
