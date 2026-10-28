import { BasePage } from './BasePage';

export class CadastroPage extends BasePage {

  async preencherNomeEEmail(nome: string, email: string): Promise<void> {
    await this.page.getByRole('textbox', { name: 'Name' }).fill(nome);
    await this.page.locator('[data-qa="signup-email"]').fill(email);
  }

  async clicarSignup(): Promise<void> {
    await this.page.locator('[data-qa="signup-button"]').click();
  }

  async visualizarFormularioInformacaoConta(): Promise<void> {
    await this.page.getByText('Enter Account Information', {
      exact: true
    }).waitFor();
  }

  async preencherInformacoesConta(): Promise<void> {
    await this.page.locator('#id_gender2').check();
    await this.page.locator('[data-qa="password"]').fill('Teste@12345');
    await this.page.locator('[data-qa="days"]').selectOption('10');
    await this.page.locator('[data-qa="months"]').selectOption('5');
    await this.page.locator('[data-qa="years"]').selectOption('2003');
    await this.page.locator('[data-qa="first_name"]').fill('Teste');
    await this.page.locator('[data-qa="last_name"]').fill('Testando');
    await this.page.locator('[data-qa="address"]').fill('Rua de Teste');
    await this.page.locator('[data-qa="country"]').selectOption('Canada');
    await this.page.locator('[data-qa="state"]').fill('Chicago');
    await this.page.locator('[data-qa="city"]').fill('Mystic falls');
    await this.page.locator('[data-qa="zipcode"]').fill('50000000');
    await this.page.locator('[data-qa="mobile_number"]').fill('99999999999');
  
}

  async clicarCreateAccount(): Promise<void> {
    await this.page.locator('[data-qa="create-account"]').click();
  }

  async validarContaCriada(): Promise<void> {
    await this.page.getByText('Account Created!', { exact: true }).waitFor();
  }


  async preencherNomeEDeixarEmailVazio(nome: string): Promise<void> {
    await this.page.getByRole('textbox', { name: 'Name' }).fill(nome);
    await this.page.locator('[data-qa="signup-email"]').fill('');
  }

  async clicarSignupComEmailVazio(): Promise<void> {
    await this.page.locator('[data-qa="signup-button"]').click();
  }

  async validarEmailObrigatorio(): Promise<void> {
    const email = this.page.locator('[data-qa="signup-email"]');
    const emailObrigatorio = await email.evaluate(
      (element: HTMLInputElement) => element.validity.valueMissing
    );

    if (!emailObrigatorio) {
      throw new Error('O campo de email deveria ser obrigatório.');
    }
}


}