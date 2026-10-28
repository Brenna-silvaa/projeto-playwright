# language: pt

@smoke
Funcionalidade: Adicionar produto ao carrinho
    Cenario: Adicionar produto ao carrinho com sucesso
        Dado que acesso a pagina de produtos
        Quando adiciono um produto ao carrinho
        Entao devo visualizar o produto no carrinho