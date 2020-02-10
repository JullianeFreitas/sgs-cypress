class SinistroPage{

    //Search
    dataCadastroSinistro = '.ui-datepicker-trigger'
    dataInicio = ':nth-child(1) > :nth-child(3) > .ui-state-default'
    dataHoje = '.ui-datepicker-today > .ui-state-default'
    searchButton = '[icon="mdi mdi-filter-outline"]'
    cpfCnpj = ':nth-child(2) > :nth-child(2) > .ng-untouched > .ui-float-label > .ng-pristine'
    searchNumeroSinistro = '.ng-untouched > .ui-inputtext'
    existeGrid = '.ui-table-scrollable-body-table'
    primeiroRegGrid = ':nth-child(1) > .actions-row > .p-0 > .ui-button > .mdi'

    //Editar
    infoSeguradoCpf = '.mt-4 > .ng-dirty > .ui-float-label > .ng-untouched'
    infoProdutoSeguradora = '[legend="Informações do Produto"] > .fieldset > :nth-child(2) > .mt-0 > app-dropdown.ng-untouched > .ui-float-label > .ng-untouched > .ui-dropdown > .ui-dropdown-label'
    infoProdutoSeguradoraType = '.ui-dropdown-filter'
    infoProdutoSeguradoraChoose = '.ui-dropdown-item'
    numeroSinistroSeguradora = ':nth-child(2) > app-input.ng-untouched > .ui-float-label > .ng-untouched > .ui-inputtext'
    numeroAvisoSeguradora = '[legend="Informações do Sinistro"] > .fieldset > :nth-child(2) > :nth-child(3) > .ng-untouched > .ui-float-label > .ng-pristine > .ui-inputtext'
    tipoOcorrencia = ':nth-child(3) > :nth-child(1) > app-dropdown.ng-untouched > .ui-float-label > .ng-untouched > .ui-dropdown > .ui-dropdown-label'
    tipoOcorrenciaChoose = '.ui-dropdown-items > :nth-child(2) > .ng-tns-c23-29'
    coberturaAcionada = '.ui-multiselect'
    coberturaAcionadaChoose = '.ui-multiselect-item'
    dataTodosCampos = '.ui-calendar > .ui-inputtext'
    valorSinistroInformado = ':nth-child(4) > .mt-0 > .ng-untouched > .ui-float-label > .ng-pristine'

    // RELATO
    descricaoRelato = ':nth-child(1) > .col-sm-6 > app-input.ng-untouched > .ui-float-label > .ng-untouched'
    situacaoRelato = ':nth-child(1) > :nth-child(2) > app-dropdown.ng-untouched > .ui-float-label > .ng-untouched > .ui-dropdown > .ui-dropdown-label'
    situacaoRelatoChoose = '.ui-dropdown-items > :nth-child(1) > .ng-tns-c23-31'
    faseRelato = ':nth-child(3) > app-dropdown.ng-untouched > .ui-float-label > .ng-untouched > .ui-dropdown > .ui-dropdown-label'
    faseRelatoChoose = '.ui-dropdown-items > :nth-child(1) > .ng-tns-c23-32'
    etapaRelato = ':nth-child(1) > app-dropdown.ng-untouched > .ui-float-label > .ng-untouched > .ui-dropdown > .ui-dropdown-label'
    etapaRelatoChoose = '.ui-dropdown-items > :nth-child(1) > .ng-tns-c23-33'
    statusRelato = ':nth-child(2) > app-dropdown.ng-untouched > .ui-float-label > .ng-untouched > .ui-dropdown > .ui-dropdown-label'
    statusRelatoChoose = ':nth-child(3) > .ng-tns-c23-34'
    adicionarRelato = '.col-sm-2 > .row-button'

    salvarSinistro = '.actions > .mr-2'
    limparPesquisa = '[icon="mdi mdi-eraser"]'

    teste = '[label="Salvar"]'




    selectDataSinistro(data){
        cy.get(this.dataTodosCampos).type(data)
    }

    clickSearchButton(){
        cy.get(this.searchButton).click()
    }

    editarSinistro(){
        cy.get(':nth-child(1) > .actions-row > .p-0 > .ui-button > .mdi').click()
    }

    setCpfCnpjSegurado(cpfCnpj){
        cy.get(this.cpfCnpj).type(cpfCnpj)
    }

}

export default SinistroPage