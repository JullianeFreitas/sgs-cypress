/// <reference types="cypress"/>
import MainPage from './pages/MainPage'

describe('Validações - Segurado', () => {

    it.skip('Cadastrar um novo segurado - Pessoa Física', () => {
        const { cpf } = require('cpf-cnpj-validator');
        const generatedCpf = cpf.generate().split('-').join('').split('.').join('')
        const home = new MainPage()
        const segurado = home.cadastroSeguradoPage

        cy.get(home.openMenu).click({ force: true })
        cy.get(home.openMenuGestao).click()
        cy.get(home.openMenuSegurados).click()
        cy.get(segurado.newButton).click()
        cy.get(segurado.cpf).type(generatedCpf)
        cy.get(segurado.nome).type('João do Teste Automatizado Cypress')
        cy.get(segurado.sexo).click().get(segurado.chooseSexo).click()
        cy.get(segurado.dataNascimento).type('20/08/1990')
        cy.get(segurado.cep).type('44340000')
        cy.get(segurado.endereco).type('Rua Alcides de Almeida')
        cy.get(segurado.numero).type('179')
        cy.get(segurado.bairro).type('Centro')
        cy.get(segurado.cidade).type('Muritiba')
        cy.get(segurado.uf).click().get(segurado.searchUf).type('BA').get(segurado.chooseUf).click()
        cy.get(segurado.telefoneFixo).type('7534240000')
        cy.get(segurado.telefoneCelular).type('75988774411')
        cy.get(segurado.email).type('joaocypress@email.com')
        cy.get(segurado.saveButton).click()
        cy.wait(2000)
        cy.get(segurado.searchCpfCnpj).type(generatedCpf).get(segurado.searchButton).click()
    
    })

    it.skip('Cadstro com erro de novo segurado - Pessoa Física', () => {
        const home = new MainPage()
        const segurado = home.cadastroSeguradoPage

        cy.get(home.openMenu).click({ force: true })
        cy.get(home.openMenuGestao).click()
        cy.get(home.openMenuSegurados).click()
        cy.get(segurado.newButton).click()
        cy.get(segurado.saveButton).click()
        cy.get(segurado.cpf).should('have.css', 'border-color', 'rgb(174, 102, 106)')
        cy.get(segurado.dataNascimento).should('have.css', 'border-color', 'rgb(174, 102, 106)')
        cy.get(segurado.nome).should('have.css', 'border-color', 'rgb(174, 102, 106)')
        cy.get(segurado.cep).should('have.css', 'border-color', 'rgb(174, 102, 106)')
        cy.get(segurado.endereco).should('have.css', 'border-color', 'rgb(174, 102, 106)')
        cy.get(segurado.numero).should('have.css', 'border-color', 'rgb(174, 102, 106)')
        cy.get(segurado.bairro).should('have.css', 'border-color', 'rgb(174, 102, 106)')
        cy.get(segurado.cidade).should('have.css', 'border-color', 'rgb(174, 102, 106)')
        cy.get(segurado.telefoneCelular).should('have.css', 'border-color', 'rgb(174, 102, 106)')
        cy.get(segurado.telefoneFixo).should('have.css', 'border-color', 'rgb(174, 102, 106)')
        cy.get(segurado.email).should('have.css', 'border-color', 'rgb(174, 102, 106)')
    })

    it('Cadastrar um novo segurado - Pessoa Jurídica', () => {
        const { cnpj } = require('cpf-cnpj-validator');
        const generatedCnpj = cnpj.generate().split('-').join('').split('.').join('')
        const home = new MainPage()
        const segurado = home.cadastroSeguradoPage

        cy.get(home.openMenu).click({ force: true })
        cy.get(home.openMenuGestao).click()
        cy.get(home.openMenuSegurados).click()
        cy.get(segurado.newButton).click()
        cy.get(segurado.pessoaJuridica).click()

        cy.get(segurado.cnpj).type(generatedCnpj)
        cy.get(segurado.razaoSocial).type('Razão Social de Testes Cypress')
        cy.get(segurado.nomeFantasia).type('Nome Fantasia de Testes Cypress')


        cy.get(segurado.cep).type('44340000')
        cy.get(segurado.endereco).type('Rua Alcides de Almeida')
        cy.get(segurado.numero).type('179')
        cy.get(segurado.bairro).type('Centro')
        cy.get(segurado.cidade).type('Muritiba')
        cy.get(segurado.uf).click().get(segurado.searchUf).type('BA').get(segurado.chooseUf).click()
        cy.get(segurado.telefoneFixo).type('7534240000')
        cy.get(segurado.telefoneCelular).type('75988774411')
        cy.get(segurado.email).type('joaocypress@email.com')
        cy.get(segurado.saveButton).click()
        cy.wait(2000)
        cy.get(segurado.searchCpfCnpj).type(generatedCnpj).get(segurado.searchButton).click()
    
    })




})