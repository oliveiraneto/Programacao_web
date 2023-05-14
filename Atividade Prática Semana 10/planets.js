//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Sebastião Oliveira Silva Neto - 2011478
//DATA 14/05/2023 -->

const express = require('express');
const router = express.Router();

// Array de planetas
let planets = [
  { id: 1, name: 'Terra', type: 'Terrestre' },
  { id: 2, name: 'Júpiter', type: 'Gasoso' },
  { id: 3, name: 'Marte', type: 'Terrestre' },
];

// Endpoint GET /api/planets - Recuperar a lista de planetas
router.get('/', (req, res) => {
  res.json({ inputs: planets });
});

// Endpoint POST /api/planets - Criar um novo planeta
router.post('/', (req, res) => {
  const newPlanet = req.body;
  newPlanet.id = planets.length + 1;
  planets.push(newPlanet);
  res.json({ inputs: newPlanet });
});

// Endpoint GET /api/planets/{planet_id} - Recuperar informações de um planeta específico por ID
router.get('/:id', (req, res) => {
  const planet = planets.find(p => p.id === parseInt(req.params.id));
  if (!planet) return res.status(404).send('Planeta não encontrado.');
  res.json({ inputs: planet });
});

// Endpoint PUT /api/planets/{planet_id} - Atualizar informações de um planeta específico por ID
router.put('/:id', (req, res) => {
  const planet = planets.find(p => p.id === parseInt(req.params.id));
  if (!planet) return res.status(404).send('Planeta não encontrado.');
  planet.name = req.body.name;
  planet.type = req.body.type;
  res.json({ inputs: planet });
});

// Endpoint DELETE /api/planets/{planet_id} - Excluir um planeta específico por ID
router.delete('/:id', (req, res) => {
  const planet = planets.find(p => p.id === parseInt(req.params.id));
  if (!planet) return res.status(404).send('Planeta não encontrado.');
  const index = planets.indexOf(planet);
  planets.splice(index, 1);
  res.json({ inputs: 'Planeta excluído com sucesso.' });
});

module.exports = router;
