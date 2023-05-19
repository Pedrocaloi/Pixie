const puppeteer = require('puppeteer');
const juzgados = require('../utils/juzgados');

const busqueda = async (req, res) => {
 try {
  const nombre = req.body.nombre;
  const año = req.body.año;
  const asunto = req.body.asunto;

  // Iniciar el navegador con la opción headless en false
  const navegador = await puppeteer.launch({ headless: true });
  const pagina = await navegador.newPage();
  console.log('JUZGADOS FALLANDO? ', [
   juzgados[38],
   juzgados[39],
   juzgados[40],
  ]);

  for (let i = 0; i < juzgados.length; i++) {
   console.log(juzgados.length, 'CANTIDAD DE JUZGADOS');
   console.log('ITERACION N°', i + 1);
   console.log(juzgados[i]);
   // Navegar a la página
   await pagina.goto('https://stjsonora.gob.mx/ListaAcuerdos/');

   // Esperar a que se cargue la página y el elemento esté disponible
   await pagina.waitForSelector('#select2-IdUnidad-container');

   // Hacer clic en el elemento "Seleccione el Juzgado"
   await pagina.click('#select2-IdUnidad-container');

   // Esperar a que aparezca la lista de opciones
   await pagina.waitForSelector('.select2-results__option');

   // Obtener todas las opciones de la lista
   const opciones = await pagina.$$('.select2-results__option');

   //  console.log('ACA URAA', opciones.CDPElementHandle);
   // Buscar la opción "HERMOSILLO - JUZGADO TERCERO DE PRIMERA INSTANCIA DE LO CIVIL DE HERMOSILLO"
   for (const opcion of opciones) {
    const textoOpcion = await pagina.evaluate((el) => el.textContent, opcion);
    if (textoOpcion.includes(`${juzgados[i]}`)) {
     await opcion.click();
    }
   }

   // Seleccionar "Acuerdos por Expediente" en el Tipo de Consulta
   await pagina.select('#Tipo', '2');

   // Ingresar el número de asunto
   await pagina.type('#Asunto', asunto);

   // Ingresar el año
   await pagina.type('#Anio', año);

   // Hacer clic en el botón "Buscar"
   await pagina.click('.boton.btnBuscar');
  }
  // res.send({ resultado });
 } catch (err) {
  console.log(err);
  res.status(404).send({ message: err.message });
 }
};

module.exports = busqueda;
