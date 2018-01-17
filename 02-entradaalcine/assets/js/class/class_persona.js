/**
 * [Persona clase que representa las personas que asisten al cine]
 */
class Persona {

  /**
   * [constructor de la clase]
   * @param {Array}    pData       [Data completa de la persona]
   */
  constructor(pData) {

    /**
     * [NOMBRE propiedad que almacena el nombre de la persona]
     * @type {string}
     */
    this.NOMBRE = pData.nombre;

    /**
     * [EDAD propiedad que almacena la edad de la persona]
     * @type {Number}
     */
    this.EDAD = pData.edad;

    /**
     * [ACOMPANANTE propiedad que almacena la persona que acompaña]
     * @type {Persona}
     */
    this.ACOMPANANTE;

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
   * [getAcompanante método que devuelve la propiedad ACOMPANANTE]
   * @return    {Persona}    [valor actual de ACOMPANANTE]
   */
  getAcompanante() {
    return this.ACOMPANANTE;
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
   * [setAcompanante método que modifica la propiedad ACOMPANANTE]
   * @param {Persona}   pAcompanante     [valor de ACOMPANANTE a asignar]
   */
  setAcompanante(pAcompanante) {
    this.ACOMPANANTE = pAcompanante;
  }

}