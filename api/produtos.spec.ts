import { test, expect } from '@playwright/test';
import Ajv from 'ajv';

const schemaProdutos = {
  type: 'object',
  required: ['responseCode', 'products'],
  properties: {
    responseCode: { type: 'number' },
    products: {
      type: 'array',
      items: {
        type: 'object',
        required: ['id', 'name', 'price'],
        properties: {
          id: { type: 'number' },
          name: { type: 'string' },
          price: { type: 'string' }
        }
      }
    }
  }
};


const ajv = new Ajv();
const validarSchema = ajv.compile(schemaProdutos);


test('Consultar lista de produtos', async ({ request }) => {
  
    const resposta = await request.get('https://automationexercise.com/api/productsList');

    expect(resposta.status()).toBe(200);

    const corpo = await resposta.json();
    expect(validarSchema(corpo)).toBe(true);

    expect(corpo.responseCode).toBe(200);
    expect(Array.isArray(corpo.products)).toBe(true);
    expect(corpo.products.length).toBeGreaterThan(0);

});