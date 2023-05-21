const { Router } = require('express');
const scrapeRoutes = require('./scrape.routes');

// Importar todos los routers;

const router = Router();

// Configurar los routers

router.use('/scrape', scrapeRoutes);

module.exports = router;
