# Desafio Técnico - Playwright

Projeto de automação de testes Web e API desenvolvido com Playwright, TypeScript, Cucumber e Gherkin.

O objetivo é validar funcionalidades de uma aplicação Web e endpoints de uma API, verificando respostas, comportamentos esperados e a estrutura dos dados retornados.

## Tecnologias utilizadas

- **Playwright:** automação de testes Web e requisições de API.
- **TypeScript:** linguagem utilizada no desenvolvimento dos testes.
- **Cucumber:** execução dos cenários de teste Web.
- **Gherkin:** escrita dos cenários em linguagem legível.
- **Ajv:** validação de schema das respostas da API.
- **Yarn:** gerenciamento de dependências e execução de comandos.

## Instalação

### Pré-requisitos

- Node.js
- Yarn
- Git

### Configuração do projeto

1. Acesse a pasta do projeto:

   cd projeto-playwright

2. Instale as dependências:

   yarn install


3. Instale os navegadores necessários para o Playwright:

   yarn playwright install

## Execução dos testes

### Testes Web

Para executar os cenários Web com Cucumber:

    yarn test:e2e

### Testes de API

Para executar todos os testes de API:

    yarn playwright test api/

Para executar um arquivo específico de testes de API:

    yarn playwright test api/produtos.spec.ts


### Relatório do Playwright

Para visualizar o relatório HTML gerado pelo Playwright:

    yarn playwright show-report

## Decisões e interpretações

- **Validação de respostas da API:** os testes verificam o status HTTP, os códigos de resposta informados no corpo e os dados relevantes para cada cenário.
- **Validação de schema:** foi utilizado Ajv para validar programaticamente a estrutura da resposta do endpoint `GET /productsList`, conforme o requisito A10.
- **Credenciais de login:** o teste de login válido reutiliza as credenciais definidas no fixture do projeto, evitando duplicação de dados.
- **Contas de teste:** os testes de criação e exclusão utilizam dados próprios para evitar interferir na conta utilizada pelos testes Web. No teste de atualização, a conta é criada com um e-mail dinâmico para reduzir conflitos entre execuções.
- **Códigos HTTP e códigos de resposta da API:** as validações consideram separadamente o status HTTP e o campo `responseCode`, pois o endpoint pode retornar HTTP 200 mesmo quando a operação de negócio não é bem-sucedida.
- **Escopo da validação:** os testes priorizam os comportamentos e as estruturas solicitados no desafio, sem adicionar validações não exigidas.   

