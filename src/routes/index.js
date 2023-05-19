const { Router } = require('express');

// Importar todos los routers;
const scrape = require('./scrape');

// Configurar los routers
const router = Router();

router.use('/scrape', scrape);

module.exports = router;
