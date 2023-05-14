//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Sebastião Oliveira Silva Neto - 2011478
//DATA 14/05/2023 -->

const express = require('express');
const knex = require('knex');
const PlanetController = require('./controllers/PlanetController');
const PlanetModel = require('./models/PlanetModel');

const app = express();
const port = 3000;

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './database.sqlite',
  },
});

const planetModel = new PlanetModel(db);
const planetController = new PlanetController(planetModel);

app.use(express.json());

app.get('/api/planets', planetController.getAllPlanets.bind(planetController));
app.get('/api/planets/:id', planetController.getPlanetById.bind(planetController));
app.post('/api/planets', planetController.createPlanet.bind(planetController));
app.put('/api/planets/:id', planetController.updatePlanet.bind(planetController));
app.delete('/api/planets/:id', planetController.deletePlanet.bind(planetController));

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}.`);
});


