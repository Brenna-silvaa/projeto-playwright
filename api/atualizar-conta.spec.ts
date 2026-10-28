
import { test, expect } from '@playwright/test';

test('Atualizar conta pela API', async ({ request }) => {
    const email = `atualizar${Date.now()}@teste.com`;

    const dadosConta = {
        name: 'Conta Teste',
        email: email,
        password: '12345teste',
        title: 'Miss',
        birth_date: '23',
        birth_month: '2',
        birth_year: '1990',
        firstname: 'Conta',
        lastname: 'Teste',
        company: 'Empresa Teste',
        address1: 'Rua do Teste',
        address2: '',
        country: 'China',
        zipcode: '50008000',
        state: 'Miami',
        city: 'Recife',
        mobile_number: '99999999999'
    };

    const criacao = await request.post('https://automationexercise.com/api/createAccount',
        { form: dadosConta }
    );

    const respostaCriacao = await criacao.json();

    expect(respostaCriacao.responseCode).toBe(201);
    expect(respostaCriacao.message).toBe('User created!');

    // Atualizando a conta criada
    
    const atualizacao = await request.put(
        'https://automationexercise.com/api/updateAccount',
        {
        form: {
            name: 'Conta Teste Atualizada',
            email: dadosConta.email,
            password: dadosConta.password,
            title: dadosConta.title,
            birth_date: dadosConta.birth_date,
            birth_month: dadosConta.birth_month,
            birth_year: dadosConta.birth_year,
            firstname: 'Conta Atualizada',
            lastname: dadosConta.lastname,
            company: dadosConta.company,
            address1: dadosConta.address1,
            address2: dadosConta.address2,
            country: dadosConta.country,
            zipcode: dadosConta.zipcode,
            state: dadosConta.state,
            city: dadosConta.city,
            mobile_number: dadosConta.mobile_number
        }
        }
    );

    expect(atualizacao.status()).toBe(200);

    const respostaAtualizacao = await atualizacao.json();

    expect(respostaAtualizacao.responseCode).toBe(200);
    expect(respostaAtualizacao.message).toBe('User updated!');


});
