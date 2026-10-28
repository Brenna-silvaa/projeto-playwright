import { test, expect } from '@playwright/test';
import { loginDados } from '../fixtures/loginDados';

test('Verificar login com credenciais validas', async ({ request }) => {
    const resposta = await request.post('https://automationexercise.com/api/verifyLogin',
        {
        form: {
            email: loginDados.email,
            password: loginDados.senha
        }
        }
    );

    expect(resposta.status()).toBe(200);

    const corpo = await resposta.json();

    expect(corpo.responseCode).toBe(200);
    expect(corpo.message).toBe('User exists!');;
});


test('Verificar login com credenciais invalidas', async ({ request }) => {
    const resposta = await request.post('https://automationexercise.com/api/verifyLogin',
        {
        form: {
            email: loginDados.email,
            password: 'SenhaInvalida'
        }
        }
    );

    expect(resposta.status()).toBe(200); //requisição funcionando

    const corpo = await resposta.json();

    expect(corpo.responseCode).toBe(404); //status de usuário não encontrado
    expect(corpo.message).toBe('User not found!');
});

