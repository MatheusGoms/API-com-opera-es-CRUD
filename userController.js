const userService = require('../services/userService');

// Obter todos os usuários
exports.getAllUsers = async (request, reply) => {
  const users = await userService.getAllUsers();
  reply.send(users);
};

// Obter usuário por ID
exports.getUserById = async (request, reply) => {
  const { id } = request.params;
  const user = await userService.getUserById(id);
  if (!user) {
    reply.status(404).send({ error: 'Usuário não encontrado' });
  } else {
    reply.send(user);
  }
};

// Criar um novo usuário
exports.createUser = async (request, reply) => {
  const newUser = request.body;
  const user = await userService.createUser(newUser);
  reply.status(201).send(user);
};

// Atualizar usuário por ID
exports.updateUser = async (request, reply) => {
  const { id } = request.params;
  const updatedUser = request.body;
  const user = await userService.updateUser(id, updatedUser);
  if (!user) {
    reply.status(404).send({ error: 'Usuário não encontrado' });
  } else {
    reply.send(user);
  }
};

// Excluir usuário por ID
exports.deleteUser = async (request, reply) => {
  const { id } = request.params;
  const success = await userService.deleteUser(id);
  if (!success) {
    reply.status(404).send({ error: 'Usuário não encontrado' });
  } else {
    reply.status(204).send();
  }
};
