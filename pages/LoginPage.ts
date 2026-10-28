import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  async preencherCredenciais(email: string, senha: string): Promise<void> {
    await this.page.locator('[data-qa="login-email"]').fill(email);
    await this.page.locator('[data-qa="login-password"]').fill(senha);
  }

  async clicarLogin(): Promise<void> {
    await this.page.locator('[data-qa="login-button"]').click();
  }

  async validarLoginRealizado(): Promise<void> {
    await this.page.getByText('Logged in as', { exact: false }).waitFor();
  }



  
  async validarMensagemErroLogin(): Promise<void> {
    await this.page.getByText( 'Your email or password is incorrect!', { exact: true }).waitFor();
}
}