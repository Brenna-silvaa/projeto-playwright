import { test, expect } from '@playwright/test';

test('Consultar lista de marcas', async ({ request }) => {
    
    const resposta = await request.get('https://automationexercise.com/api/brandsList');

    expect(resposta.status()).toBe(200);

    const corpo = await resposta.json();

    expect(corpo.responseCode).toBe(200);
    expect(Array.isArray(corpo.brands)).toBe(true);
    expect(corpo.brands.length).toBeGreaterThan(0);
});
