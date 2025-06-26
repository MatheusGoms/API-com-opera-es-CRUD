// Simula um banco de dados em memória
let users = [
  { id: 1, name: 'João', email: 'joao@example.com' },
  { id: 2, name: 'Maria', email: 'maria@example.com' },
];

// Obter todos os usuários
exports.getAllUsers = async () => users;

// Obter usuário por ID
exports.getUserById = async (id) => users.find((user) => user.id === parseInt(id));

// Criar um novo usuário
exports.createUser = async (newUser) => {
  const id = users.length ? users[users.length - 1].id + 1 : 1;
  const user = { id, ...newUser };
  users.push(user);
  return user;
};

// Atualizar usuário por ID
exports.updateUser = async (id, updatedUser) => {
  const index = users.findIndex((user) => user.id === parseInt(id));
  if (index === -1) return null;
  users[index] = { ...users[index], ...updatedUser };
  return users[index];
};

// Excluir usuário por ID
exports.deleteUser = async (id) => {
  const index = users.findIndex((user) => user.id === parseInt(id));
  if (index === -1) return false;
  users.splice(index, 1);
  return true;
};
