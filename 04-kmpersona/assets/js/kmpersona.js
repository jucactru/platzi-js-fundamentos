/**
 * [persona Nombre de la persona que va a correr]
 * @type {String}
 */
const persona = 'Jucactru';
/**
 * [dias variable que contiene los días de la semana]
 * @type {Array}
 */
const dataDias = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Domingo'
];
/**
 * [cantidadDias variable que almacena la cantidad de días]
 * @type {Number}
 */
const cantidadDias = dataDias.length;

/**
 * [valorMaxKM Valor Máximo a recorrer por día]
 * @type {Number}
 */
const valorMaxKM = 15;
/**
 * [valorMinKM Valor mínimo a recorrer por día]
 * @type {Number}
 */
const valorMinKM = 5;

/**
 * [correr Función que determina una distancia recorrida por día]
 * @type {Number}
 */
const correr = () => Math.round(Math.random() * (valorMaxKM - valorMinKM) + valorMinKM);

/**
 * [promedioCorrer función que obtiene el promedio de KM recorridos en la semana]
 * @return {Number}
 */
const promedioCorrer = () => (totalKm / cantidadDias).toFixed(2);

//itero la dataDias
let totalKm = 0;
for (let i = 0; i < cantidadDias; i++) {
  //obtengo un Km a correr
  var valorKM = correr();
  console.log('------');
  console.log(`El día ${i} es el ${dataDias[i]}`);
  console.log(`${persona} corrió ${valorKM} KM`);
  console.log('------');
  console.log('');
  //sumo el valor al totalKm
  totalKm += valorKM;
}
console.log('------');
console.log(`El valor total de KM recorridos en la semana es de ${totalKm} KM`);
console.log('------');
console.log('');
console.log('------');
console.log(`El promedio de KM a la semana es de ${promedioCorrer()} KM`);
console.log('------');