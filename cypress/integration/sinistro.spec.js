/// <reference types="cypress"/>
import MainPage from './pages/MainPage'

describe('Validações Sinistro', () => {

    it('Procurar sinistro por data e editar', () => {

        const home = new MainPage()
        cy.get(home.openMenu).click({ force: true })
        cy.get(home.openMenuOperacoes).click()
        cy.get(home.openMenuSinistro).click()
        cy.wait(5000)
        home.sinistroPage.selectDataSinistro()
        cy.get(home.sinistroPage.searchButton).click()
        home.sinistroPage.editarSinistro()
        
    
    })

    it.skip('Procurar sinistro por segurado e editar', () => {

        const home = new MainPage()
        cy.get(home.openMenu).click({ force: true })
        cy.get(home.openMenuOperacoes).click()
        cy.get(home.openMenuSinistro).click()
        cy.wait(5000)
        home.sinistroPage.setCpfCnpjSegurado('965.894.150-80')
        cy.get(home.sinistroPage.searchButton).click()
        home.sinistroPage.editarSinistro()
        cy.get(home.sinistroPage.infoSeguradoCpf).should('have.value', '965.894.150-80')
    
    })

    it.skip('Cadastrar um novo sinistro', () => {

        const home = new MainPage()
        const segurado = home.cadastroSeguradoPage
        const sinistro = home.sinistroPage
        const numSinistroSeg = String(Math.random()).substring(2,11)
        const numAvisoSeg = String(Math.random()).substring(2,11)

        cy.get(home.openMenu).click({ force: true })
        cy.get(home.openMenuGestao).click()
        cy.get(home.openMenuSegurados).click()
        cy.wait(3000)
        cy.get(segurado.searchCpfCnpj).type('96589415080').get(segurado.searchButton).click()
        cy.get(segurado.visualizarSegurado).click()
        cy.get(segurado.incluirSinistro).click()
        cy.wait(1000)
        cy.get(sinistro.infoProdutoSeguradora).click().get(sinistro.infoProdutoSeguradoraType).type('tokio').get(sinistro.infoProdutoSeguradoraChoose).click()
        cy.get(sinistro.tipoOcorrencia).click().get(sinistro.tipoOcorrenciaChoose).click()
        cy.get(sinistro.coberturaAcionada).click().get(sinistro.coberturaAcionadaChoose).click()
        cy.get(sinistro.dataTodosCampos).eq(0).click().type('15/01/2020', {force: true})
        cy.get(sinistro.dataTodosCampos).eq(2).click().type('16/01/2020', {force: true})
        cy.get(sinistro.numeroSinistroSeguradora).type(numSinistroSeg)
        cy.get(sinistro.numeroAvisoSeguradora).type(numAvisoSeg)
        cy.get(sinistro.valorSinistroInformado).type(0)
        cy.get(sinistro.descricaoRelato).type("Descrição de teste de um relato")
        cy.get(sinistro.situacaoRelato).click().get(sinistro.situacaoRelatoChoose).click()
        cy.get(sinistro.faseRelato).click().get(sinistro.faseRelatoChoose).click()
        cy.get(sinistro.etapaRelato).click().get(sinistro.etapaRelatoChoose).click()
        cy.get(sinistro.statusRelato).click().get(sinistro.statusRelatoChoose).click()
        cy.get(sinistro.dataTodosCampos).eq(3).click().get(sinistro.dataHoje).click()
        cy.get(sinistro.adicionarRelato).click()
        cy.get(sinistro.salvarSinistro).click()
        cy.get(sinistro.limparPesquisa).click()
        cy.get(sinistro.searchNumeroSinistro).type(numSinistroSeg)
        cy.get(segurado.searchButton).click()
        cy.get(sinistro.existeGrid).should('exist')


    })
    
   

   
})


