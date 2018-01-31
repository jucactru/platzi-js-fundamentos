/**
 * [Punto Objeto Punto]
 * @type {Object}
 */
const Punto = {
  /**
   * [init función inicial o constructor]
   * @param  {Number} pX  [valor de la posición en X]
   * @param  {Number} pY  [valor de la posición en Y]
   * @return {none}       [no hay retorno]
   */
  init: function init(pX, pY) {
    this.x = pX;
    this.y = pY;
  },
  /**
   * [moverEnX función agregada al prototipo Punto]
   * @param  {Number} pX  [valor que se le desea agregar a x]
   * @return {none}       [No hay retorno]
   */
  moverEnX: function moverEnX(pX) {
    this.x += pX
  },
  /**
   * [moverEnY función agregada al prototipo Punto]
   * @param  {Number} pY  [valor que se le desea agregar a y]
   * @return {none}       [No hay retorno]
   */
  moverEnY: function moverEnY(pY) {
    this.y += pY
  },
  /**
   * [calcularDistancia Función que calcula la distancia ente el objeto y otro objeto del mismo tipo]
   * @param  {[type]} pPunto [description]
   * @return {[type]}        [description]
   */
  calcularDistancia: function calcularDistancia(pPunto) {
    //obtengp el valor x
    let valorX = this.x - pPunto.x;
    //obtengo el valor y
    let valorY = this.y - pPunto.y;
    //retorno el calculo
    return Math.sqrt(Math.pow(valorX, 2) + Math.pow(valorY, 2)).toFixed(2);
  }
}


//construyo los objetos
var objP1 = Object.create(Punto);
var objP2 = Object.create(Punto);
//inicio los objetos con sus propiedades
objP1.init(0, 4);
objP2.init(3, 0);

//caluclo la distancia entre p1 y p2
console.log(objP1.calcularDistancia(objP2));