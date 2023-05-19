const juzgados = [
 'AGUA PRIETA - JUZGADO PRIMERO DE PRIMERA INSTANCIA DE LO CIVIL DE AGUA PRIETA',
 'AGUA PRIETA - JUZGADO  DE PRIMERA INSTANCIA MIXTO CON COMPETENCIA ESPECIALIZADA DEL DISTRITO JUDICIAL DE AGUA PRIETA',
 'AGUA PRIETA - JUZGADO ORAL DE LO PENAL DE AGUA PRIETA',
 'ÁLAMOS - JUZGADO DE PRIMERA INSTANCIA MIXTO DE ÁLAMOS',
 'ALTAR - PRIMER TRIBUNAL COLEGIADO REGIONAL DEL TERCER CIRCUITO',
 'ALTAR - JUZGADO PRIMERO DE PRIMERA INSTANCIA DE LO CIVIL DE CABORCA',
 'ALTAR - JUZGADO PRIMERO DE PRIMERA INSTANCIA DE LO PENAL DE CABORCA',
 'ALTAR - JUZGADO  DE PRIMERA INSTANCIA MIXTO CON COMPETENCIA ESPECIALIZADA DEL DISTRITO JUDICIAL DE ALTAR CON CABECERA EN CABORCA',
 'ALTAR - JUZGADO ORAL DE LO PENAL DE CABORCA',
 'CAJEME - PRIMER TRIBUNAL COLEGIADO REGIONAL DEL SEGUNDO CIRCUITO',
 'CAJEME - JUZGADO PRIMERO DE PRIMERA INSTANCIA DE LO CIVIL DEL DISTRITO JUDICIAL DE CAJEME',
 'CAJEME - JUZGADO SEGUNDO DE PRIMERA INSTANCIA DE LO CIVIL DEL DISTRITO JUDICIAL DE CAJEME',
 'CAJEME - JUZGADO TERCERO DE PRIMERA INSTANCIA DE LO CIVIL DEL DISTRITO JUDICIAL DE CAJEME',
 'CAJEME - JUZGADO CUARTO DE PRIMERA INSTANCIA DE LO CIVIL DEL DISTRITO JUDICIAL DE CAJEME',
 'CAJEME - JUZGADO PRIMERO DE PRIMERA INSTANCIA DE LO FAMILIAR DEL DISTRITO JUDICIAL DE CAJEME',
 'CAJEME - JUZGADO SEGUNDO DE PRIMERA INSTANCIA DE LO FAMILIAR DEL DISTRITO JUDICIAL DE CAJEME',
 'CAJEME - JUZGADO TERCERO DE PRIMERA INSTANCIA DE LO FAMILIAR DEL DISTRITO JUDICIAL DE CAJEME',
 'CAJEME - JUZGADO DE PRIMERA INSTANCIA DE LO FAMILIAR CON COMPETENCIA ESPECIALIZADA DEL DISTRITO JUDICIAL DE CAJEME',
 'CAJEME - JUZGADO PRIMERO DE PRIMERA INSTANCIA DE LO PENAL DEL DISTRITO JUDICIAL DE CAJEME',
 'CAJEME - JUZGADO SEGUNDO DE PRIMERA INSTANCIA DE LO PENAL DEL DISTRITO JUDICIAL DE CAJEME',
 'CAJEME - JUZGADO TERCERO DE PRIMERA INSTANCIA DE LO PENAL DEL DISTRITO JUDICIAL DE CAJEME',
 'CAJEME - JUZGADO CUARTO DE PRIMERA INSTANCIA DE LO PENAL DEL DISTRITO JUDICIAL DE CAJEME',
 'CAJEME - JUZGADO PRIMERO ESPECIALIZADO EN JUSTICIA PARA ADOLESCENTES CON CABECERA EN CÓCORIT',
 'CAJEME - JUZGADO SEGUNDO MIXTO CON COMPETENCIA EN MATERIAS CIVIL ESPECIALIZADA EN ARRENDAMIENTO INMOBILIARIO Y ORAL DE LO MERCANTIL, DEL DISTRITO JUDICIAL DE CAJEME, CON RESIDENCIA EN CIUDAD OBREGÓN, SONORA',
 'CAJEME - JUZGADO PRIMERO MIXTO CON COMPETENCIA EN MATERIAS CIVIL ESPECIALIZADA EN ARRENDAMIENTO INMOBILIARIO Y ORAL DE LO MERCANTIL, DEL DISTRITO JUDICIAL DE CAJEME, CON RESIDENCIA EN CIUDAD OBREGÓN, SONORA',
 'CAJEME - JUZGADO ORAL DE LO PENAL DE CD. OBREGÓN',
 'CAJEME - PRIMER TRIBUNAL LABORAL DEL DISTRITO JUDICIAL 2, CON SEDE EN CIUDAD OBREGON',
 'CANANEA - JUZGADO DE PRIMERA INSTANCIA MIXTO DE CANANEA',
 'MOCTEZUMA - JUZGADO DE PRIMERA INSTANCIA MIXTO DE CUMPAS',
 'HERMOSILLO - JUZGADO TERCERO DE PRIMERA INSTANCIA DE LO CIVIL DE HERMOSILLO',
 'GUAYMAS - JUZGADO PRIMERO DE PRIMERA INSTANCIA DE LO CIVIL DE GUAYMAS',
 'GUAYMAS - JUZGADO SEGUNDO DE PRIMERA INSTANCIA DE LO CIVIL DE GUAYMAS',
 'GUAYMAS - JUZGADO DE PRIMERA INSTANCIA DE LO FAMILIAR DE GUAYMAS',
 'GUAYMAS - JUZGADO DE PRIMERA INSTANCIA MIXTO CON COMPETENCIA ESPECIALIZADA, DEL DISTRITO JUDICIAL DE GUAYMAS, SONORA',
 'GUAYMAS - JUZGADO SEGUNDO DE PRIMERA INSTANCIA DE LO PENAL DE GUAYMAS',
 'GUAYMAS - JUZGADO ORAL DE LO PENAL DE GUAYMAS',
 'GUAYMAS - PRIMER TRIBUNAL LABORAL DEL DISTRITO JUDICIAL 7, CON SEDE EN GUAYMAS',
 'HERMOSILLO - DIRECCIÓN GENERAL DE SERVICIOS DE CÓMPUTO',
 //  'HERMOSILLO - SECRETARIA GENERAL DE ACUERDOS',
 'HERMOSILLO - PRIMER TRIBUNAL COLEGIADO REGIONAL DEL PRIMER CIRCUITO',
 'HERMOSILLO - SEGUNDO TRIBUNAL COLEGIADO REGIONAL DEL PRIMER CIRCUITO',
 'HERMOSILLO - SECRETARIA GENERAL DE ACUERDOS ORAL',
 'HERMOSILLO - JUZGADO PRIMERO DE PRIMERA INSTANCIA DE LO CIVIL DE HERMOSILLO',
 'HERMOSILLO - JUZGADO SEGUNDO DE PRIMERA INSTANCIA DE LO CIVIL DE HERMOSILLO',
 'HERMOSILLO - JUZGADO PRIMERO DE PRIMERA INSTANCIA DE LO FAMILIAR DE HERMOSILLO',
 'HERMOSILLO - JUZGADO SEGUNDO DE PRIMERA INSTANCIA DE LO FAMILIAR DE HERMOSILLO',
 'HERMOSILLO - JUZGADO TERCERO DE PRIMERA INSTANCIA DE LO FAMILIAR DE HERMOSILLO',
 'HERMOSILLO - JUZGADO CUARTO DE PRIMERA INSTANCIA DE LO FAMILIAR DE HERMOSILLO',
 'HERMOSILLO - JUZGADO DE PRIMERA INSTANCIA DE LO FAMILIAR CON COMPETENCIA ESPECIALIZADA',

 // anda para abajo

 'HERMOSILLO - JUZGADO PRIMERO DE PRIMERA INSTANCIA DE LO MERCANTIL DE HERMOSILLO',
 'HERMOSILLO - JUZGADO SEGUNDO DE PRIMERA INSTANCIA DE LO MERCANTIL DE HERMOSILLO',
 'HERMOSILLO - JUZGADO TERCERO DE PRIMERA INSTANCIA DE LO MERCANTIL DE HERMOSILLO',
 'HERMOSILLO - JUZGADO CUARTO DE PRIMERA INSTANCIA DE LO MERCANTIL DE HERMOSILLO',
 'HERMOSILLO - JUZGADO PRIMERO DE PRIMERA INSTANCIA DE LO PENAL DE HERMOSILLO',
 'HERMOSILLO - JUZGADO SEGUNDO DE PRIMERA INSTANCIA DE LO PENAL DE HERMOSILLO',
 'HERMOSILLO - JUZGADO TERCERO DE PRIMERA INSTANCIA DE LO PENAL DE HERMOSILLO',
 'HERMOSILLO - JUZGADO CUARTO DE PRIMERA INSTANCIA DE LO PENAL DE HERMOSILLO',
 'HERMOSILLO - JUZGADO QUINTO DE PRIMERA INSTANCIA DE LO PENAL DE HERMOSILLO',
 'HERMOSILLO - JUZGADO SEXTO DE PRIMERA INSTANCIA DE LO PENAL DE HERMOSILLO',
 'HERMOSILLO - JUZGADO SEPTIMO DE PRIMERA INSTANCIA DE LO PENAL DE HERMOSILLO',
 'HERMOSILLO - JUZGADO OCTAVO DE PRIMERA INSTANCIA DE LO PENAL DE HERMOSILLO',
 'HERMOSILLO - JUZGADO NOVENO DE PRIMERA INSTANCIA DE LO PENAL DE HERMOSILLO',
 'HERMOSILLO - JUZGADO PRIMERO ESPECIALIZADO EN JUSTICIA PARA ADOLESCENTES DE HERMOSILLO',
 'HERMOSILLO - JUZGADO SEGUNDO ESPECIALIZADO EN JUSTICIA PARA ADOLESCENTES DE HERMOSILLO',
 'HERMOSILLO - PRIMER TRIBUNAL UNITARIO REGIONAL DE CIRCUITO DEL ESTADO, ESPECIALIZADO EN JUSTICIA PARA ADOLESCENTES Y EN MATERIA PENAL DEL SISTEMA PENAL ACUSATORIO Y ORAL DE HERMOSILLO',
 'HERMOSILLO - JUZGADO PRIMERO ORAL MERCANTIL DE HERMOSILLO',
 'HERMOSILLO - JUZGADO SEGUNDO ORAL MERCANTIL DE HERMOSILLO',
 'HERMOSILLO - JUZGADO PRIMERO DE EJECUCIÓN DE SANCIONES DE HERMOSILLO',
 'HERMOSILLO - JUZGADO DE PRIMERA INSTANCIA  DE LO CIVIL ESPECIALIZADO EN ARRENDAMIENTO INMOBILIARIO Y EXTINCION DE DOMINIO  DEL DISTRITO JUDICIAL DE HERMOSILLO',
 'HERMOSILLO - JUZGADO ORAL DE LO PENAL DE HERMOSILLO',
 'HERMOSILLO - PRIMER TRIBUNAL LABORAL DEL DISTRITO JUDICIAL 1, CON SEDE EN HERMOSILLO',
 'HERMOSILLO - SEGUNDO TRIBUNAL LABORAL DEL DISTRITO JUDICIAL 1, CON SEDE EN HERMOSILLO',
 'HERMOSILLO - TERCER TRIBUNAL LABORAL DEL DISTRITO JUDICIAL 1, CON SEDE EN HERMOSILLO',
 'HUATABAMPO - JUZGADO PRIMERO DE PRIMERA INSTANCIA DE LO CIVIL DE HUATABAMPO',
 'HUATABAMPO - JUZGADO PRIMERO DE PRIMERA INSTANCIA DE LO PENAL DE HUATABAMPO',
 'MAGDALENA - JUZGADO DE PRIMERA INSTANCIA MIXTO DE MAGDALENA',
 'MAGDALENA - JUZGADO PRIMERO MIXTO PENAL DE MAGDALENA',
 'NAVOJOA - JUZGADO PRIMERO DE PRIMERA INSTANCIA DE LO CIVIL DE NAVOJOA',
 'NAVOJOA - JUZGADO PRIMERO DE PRIMERA INSTANCIA DE LO FAMILIAR DE NAVOJOA',
 'NAVOJOA - JUZGADO PRIMERO DE PRIMERA INSTANCIA DE LO PENAL DE NAVOJOA',
 'NAVOJOA - JUZGADO SEGUNDO DE PRIMERA INSTANCIA DE LO PENAL DE NAVOJOA',
 'NAVOJOA - JUZGADO ORAL DE LO PENAL DE NAVOJOA',
 'NAVOJOA - PRIMER TRIBUNAL LABORAL DEL DISTRITO JUDICIAL 6, CON SEDE EN NAVOJOA',
 'NOGALES - JUZGADO PRIMERO DE PRIMERA INSTANCIA DE LO CIVIL DE NOGALES',
 'NOGALES - JUZGADO PRIMERO DE PRIMERA INSTANCIA DE LO FAMILIAR DE NOGALES',
 'NOGALES - JUZGADO SEGUNDO DE PRIMERA INSTANCIA DE LO FAMILIAR DE NOGALES',
 'NOGALES - JUZGADO SEGUNDO DE PRIMERA INSTANCIA DE LO PENAL DE NOGALES',
 'NOGALES - JUZGADO TERCERO DE PRIMERA INSTANCIA DE LO PENAL DE NOGALES',
 'NOGALES - JUZGADO PRIMERO ESPECIALIZADO EN JUSTICIA PARA ADOLESCENTES DE NOGALES',
 'NOGALES - JUZGADO ORAL DE LO PENAL DE NOGALES',
 'NOGALES - PRIMER TRIBUNAL LABORAL DEL DISTRITO JUDICIAL 3, CON SEDE EN NOGALES',
 'PUERTO PEÑASCO - JUZGADO PRIMERO DE PRIMERA INSTANCIA DE LO CIVIL DE PUERTO PEÑASCO',
 'PUERTO PEÑASCO - JUZGADO PRIMERO DE PRIMERA INSTANCIA DE LO PENAL DE PUERTO PEÑASCO',
 'PUERTO PEÑASCO - PRIMER TRIBUNAL LABORAL DEL DISTRITO JUDICIAL 5, CON SEDE EN PUERTO PEÑASCO',
 'SAHUARIPA - JUZGADO DE PRIMERA INSTANCIA MIXTO DE SAHUARIPA',
 'SAN LUIS RÍO COLORADO - JUZGADO PRIMERO DE PRIMERA INSTANCIA DE LO CIVIL DE SAN LUIS RÍO COLORADO',
 'SAN LUIS RÍO COLORADO - JUZGADO DE PRIMERA INSTANCIA DE LO FAMILIAR DE SAN LUIS RÍO COLORADO',
 'SAN LUIS RÍO COLORADO - JUZGADO DE PRIMERA INSTANCIA DE LO PENAL Y DE LO FAMILIAR DEL DISTRITO JUDICIAL DE SAN LUIS RÍO COLORADO',
 'SAN LUIS RÍO COLORADO - JUZGADO PRIMERO DE PRIMERA INSTANCIA DE LO PENAL DE SAN LUIS RÍO COLORADO',
 'SAN LUIS RÍO COLORADO - JUZGADO SEGUNDO DE PRIMERA INSTANCIA DE LO PENAL DE SAN LUIS RÍO COLORADO',
 'SAN LUIS RÍO COLORADO - JUZGADO DE PRIMERA INSTANCIA MIXTO DE SAN LUIS RÍO COLORADO',
 'SAN LUIS RÍO COLORADO - JUZGADO PRIMERO ESPECIALIZADO EN JUSTICIA PARA ADOLESCENTES DE SAN LUIS RÍO COLORADO',
 'SAN LUIS RÍO COLORADO - JUZGADO ORAL DE LO PENAL DE SAN LUIS RÍO COLORADO',
 'SAN LUIS RÍO COLORADO - PRIMER TRIBUNAL LABORAL DEL DISTRITO JUDICIAL 4, CON SEDE EN SAN LUIS RIO COLORADO',
 'URES - JUZGADO DE PRIMERA INSTANCIA MIXTO DE URES',
];

module.exports = juzgados;
