const { juzgados, anios } = require('../utils/juzgados');
const HacerBusqueda = require('../utils/bot.js');

async function mapper(req, res) {
 const numeroExpediente = req.query.asunto;
 const anio = req.query.anio;
 const titular = req.query.nombre;
 const resultado = await GetExpedientes(
  juzgados,
  titular,
  numeroExpediente,
  anio,
 );
 res.json({ response: resultado });
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
    await buscarSinExpediente(j[i], titular, anio, (check = 2));
    // let res =
    // response.concat(res);
   }
   //    buscarSinExpediente(juzgado, titular, anio, (check = 2));
   break;
  case anio === '' || null:
   // Le llega solo n° exp
   console.log('La variable "anio" es una cadena vacía');
   for (let i = 0; i < juzgados.length; i++) {
    const j = juzgados;
    console.log('JUZGADO N° ', i + 1, 'de', j[i]);
    await busquedaSinAño(juzgado, titular, numeroExpediente, (check = 3));
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

async function busquedaSinAño(juzgado, titular, numeroExpediente, check) {
 let res = [];
 for (let index = 0; index < anios.length; index++) {
  n = anios[index];
  console.log('año ', n);
  let response = await HacerBusqueda(
   juzgado,
   titular,
   numeroExpediente,
   n,
   check,
  );
  res = res.concat(response);
 }
 return res;
}

async function buscarSinExpediente(juzgado, titular, anio, check) {
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
