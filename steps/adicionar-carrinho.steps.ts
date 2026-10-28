import { CarrinhoPage } from '../pages/carrinhoPage';
import { Given, When, Then } from '@cucumber/cucumber'; 


When('adiciono um produto ao carrinho', async function () {
  const carrinhoPage = new CarrinhoPage(this.page);
  await carrinhoPage.adicionarProdutoAoCarrinho('Blue Top'); 
});

Then('devo visualizar o produto no carrinho', async function () {
  const carrinhoPage = new CarrinhoPage(this.page);
  await carrinhoPage.validarProdutoNoCarrinho('Blue Top'); 
});