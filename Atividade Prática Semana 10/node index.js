//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Sebastião Oliveira Silva Neto - 2011478
//DATA 14/05/2023 -->

const express = require('express');
const app = express();
const port = 3000;

const planetsRouter = require('./routes/planets');
const informationsController = require('./controllers/informationsController');

app.use(express.json());

app.use('/api/planets', planetsRouter);

// Endpoint GET /api/informations - Recuperar informações relacionadas ao projeto
app.get('/api/informations', informationsController.getInformations);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}.`);
});
