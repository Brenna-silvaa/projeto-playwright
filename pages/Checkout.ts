import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {
  async acessarCarrinho(): Promise<void> {
    await this.page.getByRole('link', { name: 'Cart' }).click();
  }

  async acessarCheckout(): Promise<void> {
    await this.page.getByText('Proceed To Checkout').click();
  }

  async validarEnderecoEntrega(): Promise<void> {
    await this.page.getByText('Address Details', { exact: true }).waitFor();
  }

  async validarPedido(): Promise<void> {
    await this.page.getByText('Review Your Order', { exact: true }).waitFor();
    await this.page.getByText('Blue Top', { exact: true }).waitFor();
  }

  async clicarPlaceOrder(): Promise<void> {
    await this.page.getByRole('link', { name: 'Place Order' }).click();
  }

  async preencherDadosPagamento(): Promise<void> {
    await this.page.locator('[data-qa="name-on-card"]').fill('Teste JB');
    await this.page.locator('[data-qa="card-number"]').fill('4111111111111111');
    await this.page.locator('[data-qa="cvc"]').fill('123');
    await this.page.locator('[data-qa="expiry-month"]').fill('12');
    await this.page.locator('[data-qa="expiry-year"]').fill('2030');
  }

  async confirmarPedido(): Promise<void> {
    await this.page.locator('[data-qa="pay-button"]').click();
  }

  async validarConfirmacaoPedido(): Promise<void> {
    await this.page.getByText('Order Placed!', { exact: false }).waitFor();
  }


}