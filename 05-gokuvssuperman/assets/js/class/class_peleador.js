/**
 * [Peleador clase que representa a un peleador en el sistema]
 * @author Juan Carlos Castañeda Trujillo <juancarlos@jucactru.com>
 */
class Peleador {

  /**
   * [constructor de la clase]
   */
  constructor(pDataPeleador) {
    /**
     * [NOMBRE Propiedad que almacena el NOMBRE del peleador]
     * @type {String}
     */
    this.NOMBRE = pDataPeleador.nombre;

    /**
     * [VIDA propiedad que almacena la VIDA del peleador]
     * @type {Number}
     */
    this.VIDA = pDataPeleador.vida;
    /**
     * [NOMBRE propiedad que almacena el ATAQUE del peleador]
     * @type {Number}
     */
    this.ATAQUE;
  }

  /**
   * [getNombre método que devuelve el nombre del peleador]
   * @return {String}
   */
  getNombre() {
    return this.NOMBRE;
  }

  /**
   * [getVida método que devuelve la VIDA del peleador]
   * @return {Number}
   */
  getVida() {
    return this.VIDA;
  }

  /**
   * [getVida método que devuelve el ATAQUE del peleador]
   * @return {Number}
   */
  getAtaque() {
    return this.ATAQUE;
  }
  /**
   * [setNombre método que modifica el NOMBRE del peleador]
   * @param {String} pNombre
   */
  setNombre(pNombre) {
    this.NOMBRE = pNombre;
  }

  /**
   * [setVida método que modifica la VIDA del peleador]
   * @param {Number} pVida
   */
  setVida(pVida) {
    this.VIDA = pVida;
  }

  /**
   * [setVida método que modifica la VIDA del peleador]
   * @param {Number} pAtaque
   */
  setVida(pAtaque) {
    this.ATAQUE = pAtaque;
  }
}