const fastify = require('fastify')({ logger: true });
const userRoutes = require('./routes/userRoutes');

// Configuração do CORS
fastify.register(require('fastify-cors'), {
  origin: '*', // Permitir acesso de qualquer origem
});

// Registra as rotas
fastify.register(userRoutes, { prefix: '/api/users' });

// Rota padrão de teste
fastify.get('/', async (request, reply) => {
  reply.send({ message: 'API Fastify funcionando!' });
});

// Inicializa o servidor
const start = async () => {
  try {
    await fastify.listen(3000);
    console.log('Servidor rodando em http://localhost:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
