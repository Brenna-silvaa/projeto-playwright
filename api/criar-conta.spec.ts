
import { test, expect } from '@playwright/test';

test('Criar conta pela API', async ({ request }) => {
    const email = `teste${Date.now()}@teste.com`;

    const resposta = await request.post('https://automationexercise.com/api/createAccount',
        {
        form: {
            name: 'Teste Playwright',
            email: email,
            password: 'teste12345',
            title: 'Miss',
            birth_date: '10',
            birth_month: '5',
            birth_year: '2002',
            firstname: 'Teste',
            lastname: 'Playwright',
            company: 'Empresa Teste',
            address1: 'Rua de Teste',
            address2: '',
            country: 'Canada',
            zipcode: '50000000',
            state: 'Pernambuco',
            city: 'Recife',
            mobile_number: '11999999999'
        }
        }
    );

    expect(resposta.status()).toBe(200);

    const corpo = await resposta.json();

    expect(corpo.responseCode).toBe(201);
    expect(corpo.message).toBe('User created!');
});
