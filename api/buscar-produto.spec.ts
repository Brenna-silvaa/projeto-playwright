import { test, expect } from '@playwright/test';

test('Pesquisar produto com parametro valido', async ({ request }) => {

    const resposta = await request.post('https://automationexercise.com/api/searchProduct',
        {
        form: {
            search_product: 'top'
        }
        }
    );

    expect(resposta.status()).toBe(200);

    const corpo = await resposta.json();

    expect(corpo.responseCode).toBe(200);
    expect(Array.isArray(corpo.products)).toBe(true);
    expect(corpo.products.length).toBeGreaterThan(0);
});


test('Pesquisar produto sem parametro obrigatorio', async ({ request }) => {
  const resposta = await request.post('https://automationexercise.com/api/searchProduct');

  expect(resposta.status()).toBe(200);

  const corpo = await resposta.json();

  expect(corpo.responseCode).toBe(400);
  expect(corpo.message).toBe('Bad request, search_product parameter is missing in POST request.');
});

