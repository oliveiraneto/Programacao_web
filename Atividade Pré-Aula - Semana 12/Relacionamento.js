//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Sebastião Oliveira Silva Neto - 2011478
//DATA 14/05/2023 -->


const { Sequelize, Model, DataTypes } = require('sequelize');

// Cria uma nova instância do Sequelize e conecta ao banco de dados
const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite',
  storage: 'database.sqlite',
});

// Define o modelo para a tabela "galaxies"
class Galaxy extends Model {}
Galaxy.init({
  name: DataTypes.STRING,
}, { sequelize, modelName: 'galaxy' });

// Define o modelo para a tabela "stars"
class Star extends Model {}
Star.init({
  name: DataTypes.STRING,
}, { sequelize, modelName: 'star' });

// Define o modelo para a tabela "planetary_systems"
class PlanetarySystem extends Model {}
PlanetarySystem.init({
  name: DataTypes.STRING,
}, { sequelize, modelName: 'planetarySystem' });

// Define o modelo para a tabela "planets"
class Planet extends Model {}
Planet.init({
  name: DataTypes.STRING,
  type: DataTypes.STRING,
}, { sequelize, modelName: 'planet' });

// Define o modelo para a tabela "moons"
class Moon extends Model {}
Moon.init({
  name: DataTypes.STRING,
}, { sequelize, modelName: 'moon' });

// Define os relacionamentos entre os modelos
Galaxy.hasMany(Star); // Uma galáxia pode ter muitas estrelas
Star.belongsTo(Galaxy); // Uma estrela pertence a uma única galáxia

Star.hasOne(PlanetarySystem); // Uma estrela pode ter um único sistema planetário
PlanetarySystem.belongsTo(Star); // Um sistema planetário pertence a uma única estrela

PlanetarySystem.hasMany(Planet); // Um sistema planetário pode ter muitos planetas
Planet.belongsTo(PlanetarySystem); // Um planeta pertence a um único sistema planetário

Planet.hasMany(Moon); // Um planeta pode ter muitas luas
Moon.belongsTo(Planet); // Uma lua pertence a um único planeta

// Sincroniza o modelo com o banco de dados
sequelize.sync();
