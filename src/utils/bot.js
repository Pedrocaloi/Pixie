const puppeteer = require('puppeteer');

const HacerBusqueda = async (
 juzgados,
 titular,
 numeroExpediente,
 año,
 check,
) => {
 try {
  const browser = await puppeteer.launch({
   headless: false,
   args: ['--disable-gpu', '--disable-dev-shm-usage', '--no-sandbox'],
  });

  const NUM_PESTAÑAS = 5; // Número de pestañas en paralelo
  const pestañas = await Promise.all(
   Array.from({ length: NUM_PESTAÑAS }).map(() => browser.newPage()),
  );

  const promises = [];

  switch (check) {
   case 1:
    // No le llega año ni n° de exp
    busquedaSinParams();
    break;
   case 2:
    // Le llega solo año
    busquedaConAño();
    break;
   case 3:
    // Le llega solo n° exp
    // console.log('anda');
    // browser.close();
    busquedaConExp();
    break;
   case 4:
    // Le llega todos los params
    busquedaConParams();
    break;
  }

  async function busquedaConParams() {
   for (let i = 0; i < pestañas.length; i++) {
    const juzgado = juzgados[i % juzgados.length];
    const pestaña = pestañas[i];
    promises.push(
     navegarYPersistirDatos(pestaña, juzgado, titular, numeroExpediente, año),
    );
   }
  }

  async function busquedaConExp() {
   for (let i = 0; i < pestañas.length; i++) {
    const pestaña = pestañas[i];
    console.log('n° exp ', numeroExpediente);
    promises.push(navegarYPersistirDatos(pestaña, juzgados, titular, exp, año));
   }
  }

  const resultados = await Promise.all(promises);

  //   await Promise.all(pestañas.map((pestaña) => pestaña.close()));
  await browser.close();

  // Combinar los resultados de todas las pestañas y retornarlos
  const mergedResults = resultados.flat();
  return mergedResults;
 } catch (error) {
  console.error('Error:', error);
  return false;
 }
};

async function navegarYPersistirDatos(
 page,
 juzgado,
 titular,
 numeroExpediente,
 año,
) {
 try {
  await page.setRequestInterception(true);
  page.on('request', (request) => {
   if (
    request.resourceType() === 'image' ||
    request.resourceType() === 'stylesheet' ||
    request.resourceType() === 'font'
   ) {
    request.abort();
   } else {
    request.continue();
   }
  });

  await page.setCacheEnabled(true);
  page.setViewport({ width: 1280, height: 720 });
  await page.goto('https://stjsonora.gob.mx/ListaAcuerdos/', {
   waitUntil: 'domcontentloaded',
  });
  await page.waitForSelector('#select2-IdUnidad-container');
  await page.click('#select2-IdUnidad-container');
  await page.waitForSelector('.select2-results__option');

  const opciones = await page.$$('.select2-results__option');
  for (const opcion of opciones) {
   const textoOpcion = await page.evaluate((el) => el.textContent, opcion);
   if (textoOpcion.includes(juzgado)) {
    await opcion.click();
    break;
   }
  }

  await page.select('#Tipo', '2');
  await page.type('#Asunto', numeroExpediente);
  await page.type('#Anio', año);
  await page.click('.boton.btnBuscar');
  await page.waitForSelector('#container');
  //   await page.screenshot({ path: `captura_${juzgado}.png` });
  const data = await extraerDatos(page);
  const mappedResults = mapResponse(data, numeroExpediente, año, titular);

  return mappedResults;
 } finally {
  await page.close();
  // No cerramos la página aquí para reutilizarla en la siguiente iteración
 }
}

async function extraerDatos(page) {
 const tableData = await page.evaluate(() => {
  const rows = Array.from(document.querySelectorAll('tr'));
  const data = rows.map((row) => {
   const cells = Array.from(row.querySelectorAll('td'));
   return cells.map((cell) => cell.innerText);
  });
  return data;
 });
 return tableData;
}

function mapResponse(data, numeroExpediente, anio, nombre) {
 let response = [];
 for (let i = 0; i < data.length; i++) {
  let d = data[i];
  if (d.length > 0 && d[2] != undefined && d[3] != undefined) {
   //    console.log('d[2]!!', d[2]);
   //    console.log('d[3]!!', d[3]);
   if (d[2].includes(numeroExpediente + '/' + anio)) {
    if (eval(buildValidationName(nombre))) {
     //  console.log('validacion de nombre', eval(buildValidationName(nombre)));
     let res = {
      anio: d[0],
      secretaria: d[1],
      asunto: d[2],
      partes: d[3],
      sistesisresultado: d[4],
     };
     response.push(res);
    }
   }
  }
 }
 console.log('respuesta', response);
 return response;
}

function buildValidationName(nombre) {
 nombre = nombre.toUpperCase().replace(/\s+/g, ' ');
 nombre = nombre.split(' ');
 code = ``;
 for (let i = 0; i < nombre.length; i++) {
  const e = nombre[i];
  if (code != '' && i != nombre.length) {
   code += ` ||`;
  }
  code += ` d[3].includes(`;
  code += `"${e}"`;
  code += `)`;
 }

 //  console.log('code', code);
 return code;
}

// Resto del código...

module.exports = HacerBusqueda;
