# language: pt


Funcionalidade: Finalizar compra

  Cenario: Realizar compra com sucesso
      Dado que estou logado com uma conta valida
      E adiciono um produto ao carrinho
      E acesso o carrinho
      Quando acesso o checkout
      E valido o endereco de entrega
      E valido o pedido
      E clico em place order
      E preencho os dados do pagamento
      E confirmo o pedido
      Entao devo visualizar a confirmacao do pedido