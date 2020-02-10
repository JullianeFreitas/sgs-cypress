Feature: Validações Sinistro
 
  # @sinistro
  # Scenario: Procurar um sinistro por data e editar
  #   Given eu abro a página de sinistro
  #   And digite a data "08/01/2020 - 30/01/2020"
  #   And clico no botão Pesquisar
  #   And seleciono o primeiro sinistro da grid para edição
  #   And digito o valor "400,00" no campo Valor Sinistro Informado
  #   And salvo as alterações na página de sinistro  
  #   And valido a mensagem de sucesso "Sinistro alterado com sucesso!"

#  @sinistro
#   Scenario: Procurar sinistro por segurado, abrir tela de edição e validar o CPF/CNPJ
#     Given eu abro a página de sinistro
#     And digito o CPF "965.894.150-80"
#     And clico no botão Pesquisar
#     And seleciono o primeiro sinistro da grid para edição
#     And valido que o CPF é "965.894.150-80"

  @sinistro
   Scenario: Cadastrar um novo sinistro
      Given eu abro a página de segurado

      # Pesquisar como ligar step à feature. Plano B é deixar os steps mais especificos