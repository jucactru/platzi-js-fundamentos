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
 * [dataRealPeleadores Variable que contendrá a los peleadores para luchar]
 * @type {Array}
 */
let dataRealPeleadores = [];

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

//inicio los dataPeleadores
iniciarPeleadores();