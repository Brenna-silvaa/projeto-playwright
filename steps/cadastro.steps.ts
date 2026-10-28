import { Given, When, Then } from '@cucumber/cucumber';
import { CadastroPage } from '../pages/CadastroPage'

Given('que acesso o formulario de Cadastro', async function () {
    const cadastroPage = new CadastroPage(this.page)

    await cadastroPage.acessarSite()
    await cadastroPage.clicarSignupLogin()
})

Given('informo um nome e email validos', async function () {
    const cadastroPage = new CadastroPage(this.page);
    const email =  `teste${Date.now()}@teste.com`;

    await cadastroPage.preencherNomeEEmail('Teste', email);
});

When('clico em signup', async function () {
    const cadastroPage = new CadastroPage(this.page);

    await cadastroPage.clicarSignup();
});

When('visualizo o formulario de informacao da conta', async function () {
    const cadastroPage = new CadastroPage(this.page);

    await cadastroPage.visualizarFormularioInformacaoConta();
});

When('preencho os campos do formulario de informacao da conta', async function () {
    const cadastroPage = new CadastroPage(this.page);
    await cadastroPage.preencherInformacoesConta();
});

When('clico em create account', async function () {
    const cadastroPage = new CadastroPage(this.page);
    await cadastroPage.clicarCreateAccount();
});

Then('devo visualizar a confirmacao de conta criada', async function () {
    const cadastroPage = new CadastroPage(this.page);
    await cadastroPage.validarContaCriada();
});



When('preencho o nome e deixo o email vazio', async function () {
  const cadastroPage = new CadastroPage(this.page);
  await cadastroPage.preencherNomeEDeixarEmailVazio('Teste ');
});

When('clico em Signup com o email vazio', async function () {
  const cadastroPage = new CadastroPage(this.page);
  await cadastroPage.clicarSignupComEmailVazio();
});

Then('o cadastro nao deve ser enviado', async function () {
  const cadastroPage = new CadastroPage(this.page);
  await cadastroPage.validarEmailObrigatorio();
});
