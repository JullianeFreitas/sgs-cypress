class CadastroSeguradoPage{

    newButton = '[icon="mdi mdi-plus"]'
    pessoaJuridica = '[label="Jurídica"] > .ui-radiobutton > .ui-radiobutton-box > .ui-radiobutton-icon'
    // DADOS DO SEGURADO
    cpf = '[legend="Dados do Segurado"] > .fieldset > :nth-child(2) > .mt-0 > app-input.ng-untouched > .ui-float-label > .ng-untouched > .ui-inputtext'
    nome = '[legend="Dados do Segurado"] > .fieldset > :nth-child(2) > .col-md-6 > .ng-untouched > .ui-float-label > .ng-pristine'
    sexo = ':nth-child(1) > .ng-untouched > .ui-float-label > .ng-pristine > .ui-dropdown > .ui-dropdown-trigger'
    chooseSexo = '.ui-dropdown-items > :nth-child(1) > .ng-tns-c23-14'
    dataNascimento = '.ui-calendar > .ui-inputtext'
    cnpj = '[legend="Dados do Segurado"] > .fieldset > .mt-md-4 > .mt-0 > app-input.ng-untouched > .ui-float-label > .ng-untouched > .ui-inputtext'
    valorFaturamento = '[legend="Dados do Segurado"] > .fieldset > .mt-md-4 > .mt-4 > .ng-untouched > .ui-float-label > .ng-pristine'
    razaoSocial = '.mt-2 > .ng-untouched > .ui-float-label > .ng-pristine'
    nomeFantasia = '.mt-3 > .mt-4 > .ng-untouched > .ui-float-label > .ng-pristine'
    // LOCALIDADE
    cep = '[legend="Localidade"] > .fieldset > .mt-md-4 > :nth-child(1) > app-input.ng-untouched > .ui-float-label > .ng-untouched > .ui-inputtext'
    endereco = '.col-md-5 > .ng-untouched > .ui-float-label > .ng-pristine'
    numero = '[legend="Localidade"] > .fieldset > .mt-md-4 > :nth-child(3) > .ng-untouched > .ui-float-label > .ng-pristine > .ui-inputtext'
    complemento = '[legend="Localidade"] > .fieldset > .mt-md-4 > .col-md-3 > .ng-untouched > .ui-float-label > .ng-pristine'
    bairro = '.mt-md-3 > :nth-child(1) > app-input.ng-untouched > .ui-float-label > .ng-untouched'
    cidade = '.mt-md-3 > :nth-child(2) > .ng-untouched > .ui-float-label > .ng-pristine'
    uf = ':nth-child(3) > .ng-untouched > .ui-float-label > .ng-pristine > .ui-dropdown > .ui-dropdown-trigger'
    searchUf = '.ui-dropdown-filter'
    chooseUf = '.ui-dropdown-item > .ng-tns-c23-15'
    // CONTATO
    telefoneFixo = '[legend="Contatos"] > .fieldset > .row > .mt-0 > app-input.ng-untouched > .ui-float-label > .ng-untouched > .ui-inputtext'
    telefoneCelular = '[legend="Contatos"] > .fieldset > .row > .col-md-3.mt-4 > app-input.ng-untouched > .ui-float-label > .ng-untouched > .ui-inputtext'
    email = '[legend="Contatos"] > .fieldset > .row > .col-md-6 > app-input.ng-untouched > .ui-float-label > .ng-untouched'
    saveButton = '.actions > .mr-2'

    searchCpfCnpj = '.col-md-3 > app-input.ng-untouched > .ui-float-label > .ng-untouched'
    searchButton = '[icon="mdi mdi-filter-outline"]'
    visualizarSegurado = '[icon="mdi mdi-magnify"] > .ui-button'
    incluirSinistro = ':nth-child(1) > .actions-row > .p-0.ng-star-inserted > .ui-button'
}

export default CadastroSeguradoPage