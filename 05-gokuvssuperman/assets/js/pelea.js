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
let roundPelea = 0;

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
 * [quienGanaRound función que determina el ganador del round]
 * @return {Number}
 */
const quienGanaRound = () => {
  //creo el valor del ganador
  let valorGanador = 0;
  //itreo la dataRealPeleadores
  for (let i = 0; i < dataRealPeleadores.length; i++) {
    //valido si i es mayor a 0 (cero)
    if (i > 0) {
      //comparo los ataques y asigno el ganador
      valorGanador = (dataRealPeleadores[i].ATAQUE > dataRealPeleadores[valorGanador].ATAQUE) ? i : valorGanador;
    }
  }
  //devuelvo el valor ganador
  return valorGanador;
}
/**
 * [atacar función que realiza el ataque del round]
 * @param  {Number} pGanador  [la posición del peleador ganador]
 * @return {none}             [No hay retorno]
 */
const atacar = (pGanador) => {
  console.log(`el ganador es ${dataRealPeleadores[pGanador].NOMBRE}, con un ataque de ${dataRealPeleadores[pGanador].ATAQUE}`);
  //itero la dataRealPeleadores
  for (let i = 0; i < dataRealPeleadores.length; i++) {
    //valido si el item es diferente del ganadorRound
    if (i != pGanador) {
      //se reduce la vida del peleador con el poder del ganador del round
      dataRealPeleadores[i].VIDA -= dataRealPeleadores[pGanador].ATAQUE;
    }
  }
}
/**
 * [estadoPeleadores Función que muestra el estado de vida de los peleadores]
 * @return {none} [no hay retorno]
 */
const estadoPeleadores = () => {
  //itero la dataRealPeleadores
  for (itemPeleador of dataRealPeleadores) {
    console.log(`El peleador ${itemPeleador.NOMBRE} queda con ${itemPeleador.VIDA} de vida`);
  }
}
/**
 * [ganadorPelea función que presenta al ganador de la pelea]
 * @return {none} [no hay retorno]
 */
const ganadorPelea = () => {
  //defino la variable ganador
  let valorGanador = 0;
  //itero la dataRealPeleadores
  for (let i = 0; i < dataRealPeleadores.length; i++) {
    //valido si i es mayor a 0 (cero)
    if (i > 0) {
      //comparo la VIDA de los peleadores y asigno el ganador
      valorGanador = (dataRealPeleadores[i].VIDA > dataRealPeleadores[valorGanador].VIDA) ? i : valorGanador;
    }
  }
  //muestro el ganadorRound
  console.log('-------------------------------------');
  console.log(`YA HAY UN GANADOR`);
  console.log(`El peleador ganador fue: ${dataRealPeleadores[valorGanador].NOMBRE}`);
  console.log(`Su vida restante es: ${dataRealPeleadores[valorGanador].VIDA}`);
  console.log(`Su ataque final fue de: ${dataRealPeleadores[valorGanador].ATAQUE}`);
  console.log(`La Pelea duro ${roundPelea}`);
  console.log('-------------------------------------');
}

/**
 * [iniciarPelea función que inicia la pelea]
 * @return {none} [no hay retorno]
 */
const iniciarPelea = () => {
  //valido si los peleadores están vivos
  while (peleadoresVivos()) {
    //aumento el roundPelea
    roundPelea++;
    console.log('-------------------------------------');
    console.log(`Inicia el Round ${roundPelea}`);
    //asigno el ataque
    asignarAtaque();
    //realizo el ataque
    atacar(quienGanaRound());
    //muestro el estado de los peleadores
    estadoPeleadores();
    console.log('Final del Round');
    console.log('-------------------------------------');

  }
  //muestro el ganador de la pelea
  ganadorPelea();
}

//inicio los dataPeleadores
iniciarPeleadores();
//inicio la pelea
iniciarPelea();