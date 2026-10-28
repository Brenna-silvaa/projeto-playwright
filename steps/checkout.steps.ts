import { Given, When, Then } from '@cucumber/cucumber';
import { CheckoutPage } from '../pages/Checkout';
import { LoginPage } from '../pages/LoginPage';
import { CarrinhoPage } from '../pages/carrinhoPage';
import { loginDados } from '../fixtures/loginDados';

Given('que estou logado com uma conta valida', async function () {
  const loginPage = new LoginPage(this.page);

  await loginPage.acessarSite();
  await loginPage.clicarSignupLogin();
  await loginPage.preencherCredenciais(loginDados.email, loginDados.senha);
  await loginPage.clicarLogin();
  await loginPage.validarLoginRealizado();
});


Given('acesso o carrinho', async function () {
  const checkoutPage = new CheckoutPage(this.page);
  await checkoutPage.acessarCarrinho();
});

When('acesso o checkout', async function () {
  const checkoutPage = new CheckoutPage(this.page);
  await checkoutPage.acessarCheckout();
});

When('valido o endereco de entrega', async function () {
  const checkoutPage = new CheckoutPage(this.page);
  await checkoutPage.validarEnderecoEntrega();
});

When('valido o pedido', async function () {
  const checkoutPage = new CheckoutPage(this.page);
  await checkoutPage.validarPedido();
});

When('clico em place order', async function () {
  const checkoutPage = new CheckoutPage(this.page);
  await checkoutPage.clicarPlaceOrder();
});

When('preencho os dados do pagamento', async function () {
  const checkoutPage = new CheckoutPage(this.page);
  await checkoutPage.preencherDadosPagamento();
});

When('confirmo o pedido', async function () {
  const checkoutPage = new CheckoutPage(this.page);
  await checkoutPage.confirmarPedido();
});

Then('devo visualizar a confirmacao do pedido', async function () {
  const checkoutPage = new CheckoutPage(this.page);
  await checkoutPage.validarConfirmacaoPedido();
});
