//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Sebastião Oliveira Silva Neto - 2011478
//DATA 14/05/2023 -->

class PlanetModel {
    constructor(db) {
      this.db = db;
    }
  
    async getAll() {
      const planets = await this.db.select().from('planets');
      return planets;
    }
  
    async getById(id) {
      const planet = await this.db.select().from('planets').where({ id }).first();
      return planet;
    }
  
    async create(planet) {
      const [id] = await this.db('planets').insert(planet);
      const newPlanet = await this.getById(id);
      return newPlanet;
    }
  
    async update(planet) {
      await this.db('planets').where({ id: planet.id }).update(planet);
      const updatedPlanet = await this.getById(planet.id);
      return updatedPlanet;
    }
  
    async delete(planet) {
      await this.db('planets').where({ id: planet.id }).del();
    }
  }
  
  module.exports = PlanetModel;
  