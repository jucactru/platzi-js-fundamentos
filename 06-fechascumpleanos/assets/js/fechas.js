/** -------------------------------------------------- **/
/** ------------------PERSONAS------------------------ **/
/** -------------------------------------------------- **/
const dataPersonas = [{
  nombre: 'Juan Carlos',
  apellido: 'Castañeda Trujillo',
  nacimiento: '1985-05-04'
}];

/** -------------------------------------------------- **/
/** -----------------CONSTANTES----------------------- **/
/** -------------------------------------------------- **/

/**
 * [diasSemana Variable que almacena los días de la semana]
 * @type {Array}
 */
const dataDias = ['Domingo', 'Lúnes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

/**
 * [dataMeses Variable que almacena los meses del año]
 * @type {Array}
 */
const dataMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

/**
 * [fechaActual variable que almacena la fecha actual]
 * @type {Date}
 */
let fechaActual;

/** -------------------------------------------------- **/
/** -----------------FUNCIONES------------------------ **/
/** -------------------------------------------------- **/

/**
 * [crearPersona función que crea un objeto Persona]
 * @param  {Number}     pKey    [posición del array de dataPersonas]
 * @return {Persona}
 */
const crearPersona = (pKey) => {
  //creo la persona
  return new Persona(dataPersonas[pKey]);
}

const datosNacimiento = (pPersona) => {
  //obtengo la fechaActual
  fechaActual = new Date();
  //determino cuanto milisegundos han pasado
  let fechaMilisegundos = fechaActual - pPersona.getNacimiento();
  console.log(`${fechaMilisegundos.toFixed(2)} Milisegundos`);
  let fechaSegundos = fechaMilisegundos / 1000;
  console.log(`${fechaSegundos.toFixed(2)} Segundos`);
  let fechaMinutos = fechaSegundos / 60;
  console.log(`${fechaMinutos.toFixed(2)} Minutos`);
  let fechaHoras = fechaMinutos / 60;
  console.log(`${fechaHoras.toFixed(2)} Horas`);
  let fechaDias = fechaHoras / 24;
  let fechaAnios = fechaDias / 365;
  let fechaMeses = fechaAnios * 12;
  console.log(`${fechaDias.toFixed(2)} Días`);
  console.log(`${fechaMeses.toFixed(2)} Meses`);
  console.log(`${fechaAnios.toFixed(2)} Años`);

}

//creo a juan
juan = crearPersona(0);
datosNacimiento(juan);