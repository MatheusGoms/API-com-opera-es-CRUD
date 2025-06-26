const userController = require('../controllers/userController');

async function userRoutes(fastify, options) {
  fastify.get('/', userController.getAllUsers); // Listar todos os usuários
  fastify.get('/:id', userController.getUserById); // Obter usuário por ID
  fastify.post('/', userController.createUser); // Criar um novo usuário
  fastify.put('/:id', userController.updateUser); // Atualizar usuário por ID
  fastify.delete('/:id', userController.deleteUser); // Excluir usuário por ID
}

module.exports = userRoutes;
