//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Sebastião Oliveira Silva Neto - 2011478
//DATA 14/05/2023 -->

class PlanetController {
    constructor(planetModel) {
      this.planetModel = planetModel;
    }
  
    // Método para buscar todos os planetas
    async getAllPlanets(req, res) {
      const planets = await this.planetModel.getAll();
      res.json({ inputs: planets });
    }
  
    // Método para buscar um planeta por ID
    async getPlanetById(req, res) {
      const planet = await this.planetModel.getById(req.params.id);
      if (!planet) return res.status(404).send('Planeta não encontrado.');
      res.json({ inputs: planet });
    }
  
    // Método para criar um novo planeta
    async createPlanet(req, res) {
      const newPlanet = req.body;
      const planet = await this.planetModel.create(newPlanet);
      res.json({ inputs: planet });
    }
  
    // Método para atualizar um planeta existente
    async updatePlanet(req, res) {
      const planet = await this.planetModel.getById(req.params.id);
      if (!planet) return res.status(404).send('Planeta não encontrado.');
      planet.name = req.body.name;
      planet.type = req.body.type;
      const updatedPlanet = await this.planetModel.update(planet);
      res.json({ inputs: updatedPlanet });
    }
  
    // Método para excluir um planeta existente
    async deletePlanet(req, res) {
      const planet = await this.planetModel.getById(req.params.id);
      if (!planet) return res.status(404).send('Planeta não encontrado.');
      await this.planetModel.delete(planet);
      res.json({ inputs: 'Planeta excluído com sucesso.' });
    }
  }
  
  module.exports = PlanetController;
  