const mongoose = require('mongoose');

const planetSchema = new mongoose.Schema({
  name: String,
  star: { type: mongoose.Schema.Types.ObjectId, ref: 'Star' },
  asteroids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Asteroid' }]
});

const starSchema = new mongoose.Schema({
  name: String,
  galaxy: { type: mongoose.Schema.Types.ObjectId, ref: 'Galaxy' },
  planets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Planet' }]
});

const galaxySchema = new mongoose.Schema({
  name: String,
  stars: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Star' }]
});

const asteroidSchema = new mongoose.Schema({
  name: String,
  planet: { type: mongoose.Schema.Types.ObjectId, ref: 'Planet' }
});

const blackHoleSchema = new mongoose.Schema({
  name: String,
  galaxy: { type: mongoose.Schema.Types.ObjectId, ref: 'Galaxy' }
});

const Planet = mongoose.model('Planet', planetSchema);
const Star = mongoose.model('Star', starSchema);
const Galaxy = mongoose.model('Galaxy', galaxySchema);
const Asteroid = mongoose.model('Asteroid', asteroidSchema);
const BlackHole = mongoose.model('BlackHole', blackHoleSchema);

module.exports = { Planet, Star, Galaxy, Asteroid, BlackHole };
