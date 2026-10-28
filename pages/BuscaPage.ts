import { BasePage } from './BasePage';

export class BuscaPage extends BasePage {
    async acessarPaginaProdutos(): Promise<void> {
        await this.acessarSite();
        await this.page.getByRole('link', { name: 'products'}).click();
    }

    async pesquisarProduto(nomeProduto: string): Promise<void> {
        await this.page.locator('#search_product').fill(nomeProduto);
        await this.page.locator('#submit_search').click();
    }

    async validarResultadosBusca(nomeProduto: string): Promise<void> {
        await this.page.getByText('Searched Products', { exact: true }).waitFor();
        await this.page.getByText(nomeProduto, { exact: false }).first().waitFor();
    }





    async selecionarCategoriaWomen(): Promise<void> {
        await this.page.getByRole('link', { name: 'Women' }).click(); 
        await this.page.getByRole('link', { name: 'Dress', exact: true }).click();
}

    async validarCategoriaWomen(): Promise<void> {
        await this.page.getByText('Women - Dress Products', { exact: true }).waitFor();
    }


}
