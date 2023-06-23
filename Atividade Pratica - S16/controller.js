// Importar o model de usuários
const User = require('../models/user');

// Função de login
exports.login = (req, res) => {
  const { username, password } = req.body;

  // Procurar usuário no banco de dados com base nas credenciais fornecidas
  User.findOne({ username, password }, (err, user) => {
    if (err) {
      // Erro de consulta
      console.log(err);
      res.status(500).json({ success: false, message: 'Erro interno do servidor' });
    } else if (!user) {
      // Usuário não encontrado
      res.status(401).json({ success: false, message: 'Credenciais inválidas' });
    } else {
      // Usuário encontrado
      res.json({ success: true, message: 'Login bem-sucedido' });
    }
  });
};
