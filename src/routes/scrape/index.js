const express = require('express');
const router = express.Router();
const busqueda = require('../../controller/scrap.controller');

const juzgados = require('../../utils/juzgados');

// Ruta para realizar el scraping
router.post('/', busqueda);

module.exports = router;
