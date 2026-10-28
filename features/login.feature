# language: pt
Funcionalidade: Login do usuario

  Cenário: Realizar login com credenciais validas
    Dado que acesso a pagina de login
    Quando informo um email e senha validos
    E clico no botao de login
    Entao devo visualizar que estou logado


  Esquema do Cenario: Tentar login com credenciais invalidas
    Dado que acesso a pagina de login
    Quando informo o email "<email>" e a senha "<senha>"
    E clico no botao de login
    Entao devo visualizar uma mensagem de erro no login

    Exemplos:
      | email                 | senha       |
      | blabla@teste.com      | 123456      |
      | errado@teste.com      | senhaerrada |