/**
 * [Persona clase que representa las personas que asisten al cine]
 */
class Persona {
  /**
   * [constructor de la clase]
   * @param {string}    pNombre     [Nombre de la persona]
   * @param {Number}    pEdad       [Edad de la persona]
   * @param {Number}    pSolo       [Marca si la persona está sola]
   */
  constructor(pNombre, pEdad, pSolo = 0) {
    /**
     * [NOMBRE propiedad que almacena el nombre de la persona]
     * @type {string}
     */
    this.NOMBRE = pNombre;

    /**
     * [EDAD propiedad que almacena la edad de la persona]
     * @type {Number}
     */
    this.EDAD = pEdad;

    /**
     * [SOLO pripiedad que almacena si la persona se encuenta acompañada o sola]
     * @type {Number}
     */
    this.SOLO = pSolo;
  }

  /**
   * [getNombre método que devuelve la propiedad NOMBRE]
   * @return    {string}     [valor actual del NOMBRE]
   */
  getNombre() {
    return this.NOMBRE;
  }

  /**
   * [getEdad método que devuelve la propiedad EDAD]
   * @return    {Number}    [valor actual de la EDAD]
   */
  getEdad() {
    return this.EDAD;
  }

  /**
   * [getSOLO método que devuelve la propiedad SOLO]
   * @return    {Number}    [valor actual de SOLO]
   */
  getSOLO() {
    return this.SOLO;
  }

  /**
   * [setNombre metodo que módifica la propiedad NOMBRE]
   * @param {string}    pNombre     [valor del NOMBRE a asignar]
   */
  setNombre(pNombre) {
    this.NOMBRE = pNOMBRE;
  }

  /**
   * [setEdad método que modifica la pripiedad EDAD]
   * @param {Number}    pEdad     [valor de la EDAD a asignar]
   */
  setEdad(pEdad) {
    this.EDAD = pEdad;
  }

  /**
   * [setSolo método que modifica la propiedad SOLO]
   * @param {Number}    pSolo     [valor de SOLO a asignar]
   */
  setSolo(pSolo) {
    this.SOLO = pSolo;
  }
}