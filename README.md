Passo a Passo para Implementação
1. Configuração Inicial do Projeto

1 - Crie um diretório para o projeto e inicialize o npm:

mkdir fastify-api
cd fastify-api
npm init -y


2 - Instale as dependências principais:

npm install fastify fastify-plugin fastify-cors fastify-env

3 - Instale dependências de desenvolvimento:

npm install --save-dev nodemon


6. Testando a API
Inicie o servidor:


npm run dev

Faça as requisições usando Postman, Insomnia ou cURL:

GET /api/users - Retorna todos os usuários.
GET /api/users/:id - Retorna um usuário específico.
POST /api/users - Cria um novo usuário.
PUT /api/users/:id - Atualiza um usuário existente.
DELETE /api/users/:id - Exclui um usuário.
