import { BuscaPage } from '../pages/BuscaPage';
import { Given, When, Then } from '@cucumber/cucumber';

Given('que acesso a pagina de produtos', async function () {
    const buscaPage = new BuscaPage(this.page);
    await buscaPage.acessarPaginaProdutos();
});

When('pesquiso um produto existente', async function () {
    const buscaPage = new BuscaPage(this.page);
    await buscaPage.pesquisarProduto('Blue Top');
});

Then('devo visualizar os resultados correspondentes a busca', async function () {
    const buscaPage = new BuscaPage(this.page);
    await buscaPage.validarResultadosBusca('Blue Top');
});


