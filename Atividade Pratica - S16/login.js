// Importar as dependências necessárias
const express = require('express');
const router = express.Router();

// Importar o controller de login
const loginController = require('../controllers/loginController');

// Definir a rota de login
router.post('/login', loginController.login);

// Exportar as rotas
module.exports = router;
