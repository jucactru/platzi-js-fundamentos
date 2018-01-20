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
  }

  /**
   * [getNombre método que devuelve el nombre del peleador]
   * @return {String}
   */
  getNombre() {
    return this.NOMBRE;
  }

  /**
   * [getVida método que devuelve la vida del peleador]
   * @return {Number}
   */
  getVida() {
    return this.VIDA;
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

}