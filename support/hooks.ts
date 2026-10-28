
import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, type Browser, type Page } from '@playwright/test';
import { mkdir } from 'node:fs/promises';

setDefaultTimeout(30_000);

Before(async function () {
  const browser: Browser = await chromium.launch({ headless: false });
  const page: Page = await browser.newPage();

  this.browser = browser;
  this.page = page;
});

After(async function (scenario) {
  if (scenario.result?.status === 'FAILED' && this.page) {
    await mkdir('reports', { recursive: true });

    const nomeCenario = scenario.pickle.name
      .replace(/[^a-zA-Z0-9-_]/g, '_');

    const screenshot = await this.page.screenshot({
      path: `reports/${nomeCenario}-${Date.now()}.png`,
      fullPage: true
    });

    await this.attach(screenshot, 'image/png');
  }

  await this.page?.close();
  await this.browser?.close();
});
