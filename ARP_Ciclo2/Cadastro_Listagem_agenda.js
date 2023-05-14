//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Sebastião Oliveira Silva Neto - 2011478
//DATA 14/05/2023 -->


const express = require('express');
const bodyParser = require('body-parser');
const AgendaController = require('./controllers/AgendaController');
const AgendaModel = require('./models/AgendaModel');

const app = express();
const port = 3000;

// Configura o body-parser para lidar com requisições POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Cria uma instância do modelo de agendas
const agendaModel = new AgendaModel();

// Cria uma instância do controlador de agendas
const agendaController = new AgendaController(agendaModel);

// Define as rotas para a API de agendas
app.get('/agendas', agendaController.getAllAgendas.bind(agendaController));
app.get('/agendas/:id', agendaController.getAgendaById.bind(agendaController));
app.post('/agendas', agendaController.createAgenda.bind(agendaController));

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
