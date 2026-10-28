import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage';
import { loginDados } from '../fixtures/loginDados';

Given('que acesso a pagina de login', async function ()  {
  const loginPage = new LoginPage(this.page);

  await loginPage.acessarSite();
  await loginPage.clicarSignupLogin();
});

When('informo um email e senha validos', async function () {
  const loginPage = new LoginPage(this.page);

  await loginPage.preencherCredenciais(
    loginDados.email,
    loginDados.senha
  );
});

When('informo o email {string} e a senha {string}', async function ( email: string, senha: string) {
  const loginPage = new LoginPage(this.page);

  await loginPage.preencherCredenciais(email, senha);
});

When('clico no botao de login', async function () {
  const loginPage = new LoginPage(this.page);

  await loginPage.clicarLogin();
});

Then('devo visualizar que estou logado', async function () {
  const loginPage = new LoginPage(this.page);

  await loginPage.validarLoginRealizado();
});

Then('devo visualizar uma mensagem de erro no login', async function () {
  const loginPage = new LoginPage(this.page);

  await loginPage.validarMensagemErroLogin();
});