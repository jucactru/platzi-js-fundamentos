/**
 * [Punto Función prototipo que representa el Punto]
 * @param       {Number} pX [valor de la posición en X]
 * @param       {[type]} pY [valor de la posicion en y]
 * @constructor
 */
function Punto(pX, pY) {
  this.x = pX;
  this.y = pY;
}
/**
 * [moverEnX función agregada al prototipo Punto]
 * @param  {Number} pX  [valor que se le desea agregar a x]
 * @return {none}       [No hay retorno]
 */
Punto.prototype.moverEnX = function moverEnX(pX) {
  this.x += pX
}
/**
 * [moverEnY función agregada al prototipo Punto]
 * @param  {Number} pY  [valor que se le desea agregar a y]
 * @return {none}       [No hay retorno]
 */
Punto.prototype.moverEnY = function moverEnY(pY) {
  this.y += pY
}

Punto.prototype.calcularDistancia = function calcularDistancia(pPunto) {
  //obtengp el valor x
  let valorX = this.x - pPunto.x;
  //obtengo el valor y
  let valorY = this.y - pPunto.y;
  //retorno el calculo
  return Math.sqrt(Math.pow(valorX, 2) + Math.pow(valorY, 2)).toFixed(2);

}

//construyo los objetos
var valorP1 = new Punto(0, 4);
var valorP2 = new Punto(3, 0);