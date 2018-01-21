/**
 * [dataPeleadores data inicial de peleadores]
 * @type {Array}
 */
const dataPeleadores = [{
    nombre: 'Goku',
    vida: 100
  },
  {
    nombre: 'Superman',
    vida: 100
  }
];

/**
 * [PODER_MIN variable que determina el poder mínimo en cada ataque]
 * @type {Number}
 */
const PODER_MIN = 5;

/**
 * [PODER_MAX variable que determina el poder máximo de cada ataque]
 * @type {Number}
 */
const PODER_MAX = 12;

/**
 * [dataRealPeleadores Variable que contendrá a los peleadores para luchar]
 * @type {Array}
 */
let dataRealPeleadores = [];

/**
 * [roundPelea variable que determina en que round de la pelea se va]
 * @type {Number}
 */
let roundPelea = 1;

/**
 * [iniciarPeleadores Función que inicia a los peleadores en el sistema]
 * @return {none}  [no hay retorno]
 */
const iniciarPeleadores = () => {
  //valido si hay dataPeleadores
  if (dataPeleadores != null) {
    //itero la dataPeleadores
    for (itemPeleador of dataPeleadores) {
      //creo al peleadores
      let objPeleador = new Peleador(itemPeleador);
      //agrego el peleador en la data dataRealPeleadores
      dataRealPeleadores.push(objPeleador);
    }
  }
}

/**
 * [peleadoresVivos función que determina si los peleadores están vidos]
 * @return {Boolean}
 */
const peleadoresVivos = () => {
  //creo el valor retorno
  let valorRetorno = true;
  //itero la dataPeleadores
  for (itemPeleador of dataRealPeleadores) {
    //valido si la vida del peleador es cero (0) o menos
    if (itemPeleador.VIDA <= 0) {
      //cambio el valor retorno
      valorRetorno = false;
      //detengo la iteración
      break;
    }
  }
  //devuelvo el valorRetorno
  return valorRetorno;
}

/**
 * [calcularAtaque función que calcula randomicamente el ataque del peleador]
 * @return {Number} [un valor entre el PODER_MIN y el PODER_MAX]
 */
const calcularAtaque = () => Math.round(Math.random() * (PODER_MAX - PODER_MIN) + PODER_MIN);

/**
 * [asignarAtaque función que asigna el ataque a cada peleador]
 * @return {none} [no hay retorno]
 */
const asignarAtaque = () => {
  //itero la dataRealPeleadores
  for (let i = 0; i < dataRealPeleadores.length; i++) {
    //calculo el ataque y lo asigno al peleador
    dataRealPeleadores[i].ATAQUE = calcularAtaque();
  }
}


/**
 * [iniciarPelea función que inicia la pelea]
 * @return {none} [no hay retorno]
 */
const iniciarPelea = () => {
  //valido si los peleadores están vivos
  if (peleadoresVivos()) {
    asignarAtaque();
  }
}

//inicio los dataPeleadores
iniciarPeleadores();
//inicio la pelea
iniciarPelea();