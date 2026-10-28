
import { Given, When, Then } from '@cucumber/cucumber';
import { CarrinhoPage } from '../pages/carrinhoPage';

Given('que estou com um produto no carrinho', async function () {
  const carrinhoPage = new CarrinhoPage(this.page);
  await carrinhoPage.acessarPaginaProdutos();
  await carrinhoPage.adicionarProdutoAoCarrinho('Blue Top');
});

When('removo o produto do carrinho', async function () {
  const carrinhoPage = new CarrinhoPage(this.page);
  await carrinhoPage.removerProdutoDoCarrinho();
});

Then('o carrinho deve ficar vazio', async function () {
  const carrinhoPage = new CarrinhoPage(this.page);
  await carrinhoPage.validarCarrinhoVazio();
});
