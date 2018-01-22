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
const fechaActual = new Date();

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
//creo a juan
juan = crearPersona(0);