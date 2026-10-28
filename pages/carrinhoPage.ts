import { BasePage } from './BasePage';

export class CarrinhoPage extends BasePage {
  async acessarPaginaProdutos(): Promise<void> {
    await this.acessarSite();
    await this.page.getByRole('link', { name: 'Products' }).click();
  }


  async adicionarProdutoAoCarrinho(nomeProduto: string): Promise<void> {
    const produto = this.page.locator('.productinfo').filter({
        hasText: nomeProduto
    });

    await produto.locator('.add-to-cart').first().click();

    await this.page.getByRole('link', { name: 'View Cart' }).click();
    }


  async validarProdutoNoCarrinho(nomeProduto: string): Promise<void> {
    await this.page.locator('#cart_info').getByText(nomeProduto).waitFor();
  }



  
  async removerProdutoDoCarrinho(): Promise<void> {
    await this.page.locator('.cart_quantity_delete').click();
  }

  async validarCarrinhoVazio(): Promise<void> {
    await this.page.getByText('Cart is empty!',{ exact: false }).waitFor();
  }


}