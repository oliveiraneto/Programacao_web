//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Sebastião Oliveira Silva Neto - 2011478
//DATA 14/05/2023 -->

class PlanetModel {
    constructor(db) {
      this.db = db;
    }
  
    // Método para buscar todos os planetas
    async getAll() {
      const planets = await this.db.select().from('planets');
      return planets;
    }
  
    // Método para buscar um planeta por ID
    async getById(id) {
      const planet = await this.db.select().from('planets').where({ id }).first();
      return planet;
    }
  
    // Método para criar um novo planeta
    async create(planet) {
      const [id] = await this.db('planets').insert(planet);
      const newPlanet = await this.getById(id);
      return newPlanet;
    }
  
    // Método para atualizar um planeta existente
    async update(planet) {
      await this.db('planets').where({ id: planet.id }).update(planet);
      const updatedPlanet = await this.getById(planet.id);
      return updatedPlanet;
    }
  
    // Método para excluir um planeta existente
    async delete(planet) {
      await this.db('planets').where({ id: planet.id }).del();
    }
  }
  
  module.exports = PlanetModel;
  