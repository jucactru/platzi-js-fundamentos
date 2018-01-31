/**
 * [Punto Objeto de tipo Punto]
 * @author Juan Carlos Castañeda Trujillo <juancarlos@jucactru.com>
 */
class Punto {
  /**
   * [constructor]
   * @param {Number} pX [valor de la posición x]
   * @param {Number} pY [valor de la posicion y]
   */
  constructor(pX, pY) {
    this.x = pX;
    this.y = pY;
  }

  /**
   * [moverEnX función agregada al prototipo Punto]
   * @param  {Number} pX  [valor que se le desea agregar a x]
   * @return {none}       [No hay retorno]
   */
  moverEnX(pX) {
    this.x += pX
  }
  /**
   * [moverEnY función agregada al prototipo Punto]
   * @param  {Number} pY  [valor que se le desea agregar a y]
   * @return {none}       [No hay retorno]
   */
  moverEnY(pY) {
    this.y += pY
  }

  /**
   * [calcularDistancia método que calcula la distancia entre un punto y otro]
   * @param  {[type]} pPunto [description]
   * @return {[type]}        [description]
   */
  calcularDistancia(pPunto) {
    //obtengp el valor x
    let valorX = this.x - pPunto.x;
    //obtengo el valor y
    let valorY = this.y - pPunto.y;
    //retorno el calculo
    return Math.sqrt(Math.pow(valorX, 2) + Math.pow(valorY, 2)).toFixed(2);

  }
}