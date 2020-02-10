/// <reference types="cypress"/>
import MainPage from '../../integration/pages/MainPage'
import { Given } from "cypress-cucumber-preprocessor/steps";

const home = new MainPage()

Given('eu abro a página de segurado', () => {
    cy.get(home.openMenu).click({ force: true })
        cy.get(home.openMenuGestao).click()
        cy.get(home.openMenuSegurados).click()
        cy.wait(3000)
  })