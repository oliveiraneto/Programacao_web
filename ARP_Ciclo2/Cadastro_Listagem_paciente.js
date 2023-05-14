//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Sebastião Oliveira Silva Neto - 2011478
//DATA 14/05/2023 -->


const express = require('express');
const bodyParser = require('body-parser');
const PatientController = require('./controllers/PatientController');
const PatientModel = require('./models/PatientModel');

const app = express();
const port = 3000;

// Configura o body-parser para lidar com requisições POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Cria uma instância do modelo de pacientes
const patientModel = new PatientModel();

// Cria uma instância do controlador de pacientes
const patientController = new PatientController(patientModel);

// Define as rotas para a API de pacientes
app.get('/patients', patientController.getAllPatients.bind(patientController));
app.get('/patients/:id', patientController.getPatientById.bind(patientController));
app.post('/patients', patientController.createPatient.bind(patientController));

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
