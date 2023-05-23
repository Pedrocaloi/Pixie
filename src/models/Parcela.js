const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 sequelize.define(
  'parcela',
  {
   id: {
    type: DataTypes.FLOAT,
    primaryKey: true,
    allowNull: false,
   },
   OBJECTID: {
    type: DataTypes.FLOAT,
   },
   RM: {
    type: DataTypes.FLOAT,
   },
   MCN: {
    type: DataTypes.FLOAT,
   },
   LOTE: {
    type: DataTypes.FLOAT,
   },
   CCAT: {
    type: DataTypes.STRING,
   },
   NOF: {
    type: DataTypes.STRING,
   },
   OBSERVACIO: {
    type: DataTypes.STRING,
   },
   USO: {
    type: DataTypes.STRING,
   },
   OBS_CAMPO: {
    type: DataTypes.STRING,
   },
   MANZANA: {
    type: DataTypes.STRING,
   },
   FECHA_MOV: {
    type: DataTypes.STRING,
   },
   MODIFICO: {
    type: DataTypes.STRING,
   },
   CVE_CAT_ES: {
    type: DataTypes.STRING,
   },
   SHAPE_AREA: {
    type: DataTypes.FLOAT,
   },
   SHAPE_LEN: {
    type: DataTypes.FLOAT,
   },
   PRKCCLAVEC: {
    type: DataTypes.STRING,
   },
   // ESTA ES PIT
   PROPIE: {
    type: DataTypes.STRING,
   },
   AREA: {
    type: DataTypes.FLOAT,
   },
   ESTADO: {
    type: DataTypes.STRING,
   },
   CVECATAS: {
    type: DataTypes.STRING,
   },
   // CALLE
   UBICACION: {
    type: DataTypes.STRING,
   },
   NUMOFI: {
    type: DataTypes.STRING,
   },
   COLONIA: {
    type: DataTypes.STRING,
   },
   CP: {
    type: DataTypes.STRING,
   },
   POBLACION: {
    type: DataTypes.STRING,
   },
   RAZONSOCIA: {
    type: DataTypes.STRING,
   },
   ESTADO_1: {
    type: DataTypes.STRING,
   },
   CVECATAS_1: {
    type: DataTypes.STRING,
   },
   NOTIFICAR: {
    type: DataTypes.STRING,
   },
   COL: {
    type: DataTypes.STRING,
   },
   POB: {
    type: DataTypes.STRING,
   },
   TIPOPR: {
    type: DataTypes.STRING,
   },
   STATUSLEGA: {
    type: DataTypes.STRING,
   },
   ANOTACION: {
    type: DataTypes.STRING,
   },
   RPP: {
    type: DataTypes.STRING,
   },
   REGIMEN: {
    type: DataTypes.STRING,
   },
   CVECATAS_2: {
    type: DataTypes.STRING,
   },
   TERRENO: {
    type: DataTypes.FLOAT,
   },
   TOTAL: {
    type: DataTypes.FLOAT,
   },
   ESTADO_12: {
    type: DataTypes.STRING,
   },
   CVECATAS_3: {
    type: DataTypes.STRING,
   },
   SUPERFICIE: {
    type: DataTypes.FLOAT,
   },
   VTOTAL: {
    type: DataTypes.FLOAT,
   },
   ESTADO__13: {
    type: DataTypes.STRING,
   },
   CVECATAS_4: {
    type: DataTypes.STRING,
   },
   CONSTR: {
    type: DataTypes.FLOAT,
   },
   VALTOT: {
    type: DataTypes.FLOAT,
   },
   CVECATAS_5: {
    type: DataTypes.STRING,
   },
   NUMREGPUB: {
    type: DataTypes.FLOAT,
   },
   FECHAREGPU: {
    type: DataTypes.STRING,
   },
   NUMESCRITU: {
    type: DataTypes.STRING,
   },
   COORDINATES: {
    type: DataTypes.ARRAY(DataTypes.ARRAY(DataTypes.FLOAT)),
   },
  },
  {
   timestamps: false,
  },
 );
};
