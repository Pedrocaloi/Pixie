const { juzgados, anios } = require('../utils/juzgados');
const HacerBusqueda = require('../utils/bot.js');
const { Parcela } = require('../db');
const Json = require('../utils/prueba.json');

// console.log('Objeto ', Parcelas);

const Parcelas = [];

Parcelas.push(Json);

// const jsonString = fs.readFileSync('/utils/10.json', 'utf8');

// const Parcelas = JSON.parse(jsonString);

async function mapper(req, res) {
 const numeroExpediente = req.query.asunto;
 const anio = req.query.anio;
 const titular = req.query.nombre;

 const resultadoScraping = await GetExpedientes(
  juzgados,
  titular,
  numeroExpediente,
  anio,
 );

 //  const resultadoDb = async () => {
 //   try {
 //    const createdParcelas = await Promise.all(
 //     Parcelas.map(async (parcela) => {
 //      console.log('toy en la parcela ', parcela.features);
 //      const [createdParcela, created] = await Parcela.findOrCreate({
 //       where: {
 //        id: parcela.features.id,
 //        OBJECTID: parcela.features.properties.OBJECTID,
 //        RM: parcela.features.properties.RM,
 //        MCN: parcela.features.properties.MCN,
 //        LOTE: parcela.features.properties.LOTE,
 //        CCAT: parcela.features.properties.CCAT,
 //        NOF: parcela.features.properties.NOF,
 //        OBSERVACIO: parcela.features.properties.OBSERVACIO,
 //        USO: parcela.features.properties.USO,
 //        OBS_CAMPO: parcela.features.properties.OBS_CAMPO,
 //        MANZANA: parcela.features.properties.MANZANA,
 //        FECHA_MOV: parcela.features.properties.FECHA_MOV,
 //        MODIFICO: parcela.features.properties.MODIFICO,
 //        CVE_CAT_ES: parcela.features.properties.CVE_CAT_ES,
 //        SHAPE_AREA: parcela.features.properties.SHAPE_AREA,
 //        SHAPE_LEN: parcela.features.properties.SHAPE_LEN,
 //        PRKCCLAVEC: parcela.features.properties.PRKCCLAVE,
 //        PROPIE: parcela.features.properties.PROPIE,
 //        AREA: parcela.features.properties.AREA,
 //        ESTADO: parcela.features.properties.ESTADO,
 //        CVECATAS: parcela.features.properties.CVECATAS,
 //        UBICACION: parcela.features.properties.UBICACION,
 //        NUMOFI: parcela.features.properties.NUMOFI,
 //        COLONIA: parcela.features.properties.COLONIA,
 //        CP: parcela.features.properties.CP,
 //        POBLACION: parcela.features.properties.POBLACION,
 //        RAZONSOCIA: parcela.features.properties.RAZONSOCIA,
 //        ESTADO_1: parcela.features.properties.ESTADO_1,
 //        CVECATAS_1: parcela.features.properties.CVECATAS_1,
 //        NOTIFICAR: parcela.features.properties.NOTIFICAR,
 //        COL: parcela.features.properties.COL,
 //        POB: parcela.features.properties.POB,
 //        TIPOPR: parcela.features.properties.TIPOPR,
 //        STATUSLEGA: parcela.features.properties.STATUSLEGA,
 //        ANOTACION: parcela.features.properties.ANOTACION,
 //        RPP: parcela.features.properties.RPP,
 //        REGIMEN: parcela.features.properties.REGIMEN,
 //        CVECATAS_2: parcela.features.properties.CVECATAS_2,
 //        TERRENO: parcela.features.properties.TERRENO,
 //        TOTAL: parcela.features.properties.TOTAL,
 //        ESTADO_12: parcela.features.properties.ESTADO_12,
 //        CVECATAS_3: parcela.features.properties.CVECATAS_3,
 //        SUPERFICIE: parcela.features.properties.SUPERFICIE,
 //        VTOTAL: parcela.features.properties.VTOTAL,
 //        ESTADO_13: parcela.features.properties.ESTADO_13,
 //        CVECATAS_4: parcela.features.properties.CVECATAS_4,
 //        CONSTR: parcela.features.properties.CONSTR,
 //        VALTOT: parcela.features.properties.VALTOT,
 //        CVECATAS_5: parcela.features.properties.CVECATAS_5,
 //        NUMREGPUB: parcela.features.properties.NUMREGPUB,
 //        FECHAREGPU: parcela.features.properties.FECHAREGPU,
 //        NUMESCRITU: parcela.features.properties.NUMESCRITU,
 //        COORDINATES: parcela.features.geometry.coordinates,
 //       },
 //       defaults: parcela,
 //      });

 //      return createdParcela;
 //     }),
 //    );

 //    res.status(200).json({
 //     message: 'Parcelas creadas correctamente',
 //     parcelas: createdParcelas,
 //    });
 //   } catch (error) {
 //    console.error('Error al crear parcelas:', error);
 //    res.status(500).json({ error: 'Error al crear parcelas' });
 //   }
 //  };
 //  resultadoDb();
 //  const resultado = resultadoScraping;
 //  .concat(resultadoDb);
 res.json({ response: resultadoScraping });
}

async function GetExpedientes(juzgado, titular, numeroExpediente, anio) {
 switch (true) {
  case (numeroExpediente === '' || null) && (anio === '' || null):
   // No le llega año ni n° de exp
   console.log('Ambas variables son cadenas vacías');
   busquedaSinInfo(juzgado, titular, (check = 1));
   break;
  case numeroExpediente === '' || null:
   // Le llega solo año
   console.log('La variable "numeroExpediente" es una cadena vacía');
   for (let i = 0; i < juzgados.length; i++) {
    const j = juzgados;
    console.log('JUZGADO N° ', i + 1, 'de', j[i]);
    await busquedaConAño(j[i], titular, anio, (check = 2));
    // let res =
    // response.concat(res);
   }
   //    busquedaConAño(juzgado, titular, anio, (check = 2));
   break;
  case anio === '' || null:
   // Le llega solo n° exp
   console.log('La variable "anio" es una cadena vacía');
   for (let i = 0; i < juzgados.length; i++) {
    const j = juzgados;
    console.log('JUZGADO N° ', i + 1, 'de', j[i]);
    await busquedaConExp(juzgado, titular, numeroExpediente, (check = 3));
    // let res =
    // response.concat(res);
   }
   break;
  default:
   // Le llega todos los params
   console.log('No se cumple ninguna condición');
   //    let response = [];
   const j = [];
   for (let i = 0; i < juzgados.length; i += 5) {
    j.push(juzgados.slice(i, i + 5));
   }
   for (let i = 0; i < j.length; i++) {
    console.log('ITERACION N° ', i + 1, 'de', j[i]);
    // let res =
    await busquedaConTodo(j[i], titular, numeroExpediente, anio, (check = 4));
    // response.concat(res);
   }
   //    return response;
   break;
 }
}

async function busquedaConTodo(
 juzgado,
 titular,
 numeroExpediente,
 anio,
 check,
) {
 let res = [];
 let response = await HacerBusqueda(
  juzgado,
  titular,
  numeroExpediente,
  anio,
  check,
 );
 res = res.concat(response);
 return res;
}

async function busquedaSinInfo(juzgado, titular, check) {
 let res = [];
 for (let index = 0; index < anios.length; index++) {
  for (let i = 1; i < 9999; i++) {
   let a = i.toString().padStart(4, '0');
   if (a.length == 4) {
    let response = await HacerBusqueda(
     juzgado,
     titular,
     a,
     anios[index],
     check,
    );
    // let data = await response.json();
    res = res.concat(response);
   }
  }
 }
 return res;
}

async function busquedaConExp(juzgado, titular, numeroExpediente, check) {
 let res = [];
 const n = [];
 for (let i = 0; i < anios.length; i += 5) {
  n.push(anios.slice(i, i + 5));
 }
 for (let index = 0; index < n.length; index++) {
  // n = anios[index];
  console.log('n° exp', numeroExpediente);
  console.log('años ', n[index]);
  let response = await HacerBusqueda(
   juzgado,
   titular,
   numeroExpediente,
   n[index],
   check,
  );
  res = res.concat(response);
 }
 return res;
}

async function busquedaConAño(juzgado, titular, anio, check) {
 let res = [];
 for (let i = 1; i < 9999; i++) {
  let a = i.toString().padStart(4, '0');
  console.log('año', anio);
  if (a.length == 4) {
   let response = await HacerBusqueda(juzgado, titular, a, anio, check);
   res = res.concat(response);
  }
 }
 return res;
}

module.exports = mapper;

//  let response = [];
//  const j = [];
//  for (let i = 0; i < juzgados.length; i += 5) {
//   j.push(juzgados.slice(i, i + 5));
//  }
//  for (let i = 0; i < j.length; i++) {
//   console.log('ITERACION N° ', i + 1, 'de', j[i]);
//   let res = await expedientes(j[i], titular, numeroExpediente, anio);
//   response.concat(res);
//  }
//  return response;
