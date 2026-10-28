import {  Page } from '@playwright/test';

export class BasePage {
  constructor(protected readonly page: Page) {}

  async acessarSite(): Promise<void> {
    await this.page.goto('https://automationexercise.com/');
  }

  async clicarSignupLogin(): Promise<void> {
    await this.page.getByRole('link', { name: /signup \/ login/i }).click();
  }
}