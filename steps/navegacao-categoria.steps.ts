import { When, Then } from '@cucumber/cucumber';
import { BuscaPage } from '../pages/BuscaPage';

When('seleciono a categoria Women', async function () {
  const buscaPage = new BuscaPage(this.page);

  await buscaPage.selecionarCategoriaWomen();
});

Then('devo visualizar os produtos da categoria Women', async function () {
  const buscaPage = new BuscaPage(this.page);

  await buscaPage.validarCategoriaWomen();
});