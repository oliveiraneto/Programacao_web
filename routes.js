const express = require('express');
const { Planet, Star, Galaxy, Asteroid, BlackHole } = require('./models');

const router = express.Router();

router.get('/planet/:id', async (req, res) => {
  try {
    const planet = await Planet.findById(req.params.id).populate('star asteroids');
    res.json(planet);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
