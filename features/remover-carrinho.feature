
# language: pt

Funcionalidade: Remover produto do carrinho

  Cenario: Remover produto do carrinho com sucesso
    Dado que estou com um produto no carrinho
    Quando removo o produto do carrinho
    Entao o carrinho deve ficar vazio
