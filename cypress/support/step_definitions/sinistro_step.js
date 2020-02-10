/// <reference types="cypress"/>
import MainPage from '../../integration/pages/MainPage'
import { Given } from "cypress-cucumber-preprocessor/steps";
import { And } from "cypress-cucumber-preprocessor/steps";
import { cnpj } from 'cpf-cnpj-validator';

const home = new MainPage()

Given('eu abro a página de sinistro', () => {
    cy.get(home.openMenu).click({ force: true })
    cy.get(home.openMenuOperacoes).click()
    cy.get(home.openMenuSinistro).click()
    cy.wait(5000)
  })

  And('digite a data {string}', data => {
    home.sinistroPage.selectDataSinistro(data)
  })

  And('clico no botão Pesquisar', () => {
    cy.get(home.sinistroPage.searchButton).click()
  })

  And('seleciono o primeiro sinistro da grid para edição', () => {
    cy.get(home.sinistroPage.primeiroRegGrid).click()
    cy.wait(5000)
  })

  And('digito o valor {string} no campo Valor Sinistro Informado', valor => {
    cy.get(home.sinistroPage.valorSinistroInformado).clear().type(valor)
  })

  And('salvo as alterações na página de sinistro', () => {
    cy.get(home.sinistroPage.teste).click()
  })

  And('valido a mensagem de sucesso {string}', mensagem => {
    cy.get('.custom-success').should('have.value', '')
  })


  And('digito o CPF {string}', cpfCnpj => {
    home.sinistroPage.setCpfCnpjSegurado(cpfCnpj)
  })

  And('valido que o CPF é {string}', cpfCnpj => {
    cy.get(home.sinistroPage.infoSeguradoCpf).should('have.value', cpfCnpj)
  })