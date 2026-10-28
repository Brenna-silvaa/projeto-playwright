# language: pt


Funcionalidade: Cadastro de usuario
    @regressao
    Cenario: Cadastrar usuario com dados validos
        Dado que acesso o formulario de Cadastro
        E informo um nome e email validos
        E clico em signup
        Quando visualizo o formulario de informacao da conta
        E preencho os campos do formulario de informacao da conta
        E clico em create account
        Entao devo visualizar a confirmacao de conta criada

    Cenario: Validacao de campo obrigatorio
        Dado que acesso o formulario de Cadastro
        Quando preencho o nome e deixo o email vazio
        E clico em Signup com o email vazio
        Entao o cadastro nao deve ser enviado