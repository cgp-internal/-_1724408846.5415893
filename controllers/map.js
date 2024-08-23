const express = require('express');
const router = express.Router();
const { getMapData } = require('../services/mapService');

router.get('/map', (req, res) => {
  getMapData();
  res.sendFile(`${__dirname}/../public/index.html`);
});

module.exports = router;