
import { test, expect } from '@playwright/test';

test('Excluir conta pela API', async ({ request }) => {
    const email = `excluir${Date.now()}@teste.com`;

    const dadosConta = {
        name: 'Conta Descartavel',
        email: email,
        password: 'teste123',
        title: 'Miss',
        birth_date: '10',
        birth_month: '5',
        birth_year: '2003',
        firstname: 'Conta',
        lastname: 'Descartavel',
        company: 'Empresa Teste',
        address1: 'Rua de Teste',
        address2: '',
        country: 'Brasil',
        zipcode: '50000000',
        state: 'Pernambuco',
        city: 'Flores',
        mobile_number: '11999999999'
    };

    const criacao = await request.post('https://automationexercise.com/api/createAccount',{ form: dadosConta });

    const respostaCriacao = await criacao.json();

    expect(respostaCriacao.responseCode).toBe(201);
    expect(respostaCriacao.message).toBe('User created!');

    
    const exclusao = await request.delete(
        'https://automationexercise.com/api/deleteAccount',
        {
        form: {
            email: dadosConta.email,
            password: dadosConta.password
        }
        }
    );

    expect(exclusao.status()).toBe(200);

    const respostaExclusao = await exclusao.json();

    expect(respostaExclusao.responseCode).toBe(200);
    expect(respostaExclusao.message).toBe('Account deleted!');


});
