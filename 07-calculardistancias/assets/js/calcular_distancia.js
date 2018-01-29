/**
 * [p1 posición 1]
 * @type {Object}
 */
const p1 = {
  x: 0,
  y: 4
};

/**
 * [p2 posición 2]
 * @type {Object}
 */
const p2 = {
  x: 3,
  y: 0
}

/**
 * [valorX función que calcula la distancia entre dos puntos cardinales]
 * @param  {Object}   pPosicion1    [objeto con posiciones cardinales en X y Y]
 * @param  {Object}   pPosicion2    [objeto con posiciones cardinales en X y Y]
 * @return {Number}                 [Entero de la distancia]
 */
const calcularDistancia = (pPosicion1, pPosicion2) => {
  //obtengp el valor x
  let valorX = pPosicion1.x - pPosicion2.x
  //obtengo el valor y
  let valorY = pPosicion1.y - pPosicion2.y;
  //retorno el calculo
  return Math.sqrt(Math.pow(valorX, 2) + Math.pow(valorY, 2));
}

console.log(calcularDistancia(p1, p2));
console.log(calcularDistancia(p2, p1));