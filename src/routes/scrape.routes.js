const express = require('express');
const router = express.Router();
const mapper = require('../controller/scrape.controller');

// Ruta para realizar el scraping
router.get('/', mapper);

module.exports = router;
