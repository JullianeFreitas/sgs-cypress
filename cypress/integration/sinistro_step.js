import { Given } from "cypress-cucumber-preprocessor/steps";

const home = new MainPage()

Given('eu abro a página de sinistro', () => {
    cy.get(home.openMenu).click({ force: true })
    cy.get(home.openMenuOperacoes).click()
    cy.get(home.openMenuSinistro).click()
    cy.wait(5000)
  })