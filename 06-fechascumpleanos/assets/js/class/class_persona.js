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
     * [NOMBRE propiedad que almacena el apellido de la persona]
     * @type {string}
     */
    this.APELLIDO = pData.apellido;

    /**
     * [NOMBRECOMPLETO propiedad que almacena el nombre completo de la persona]
     * @type {string}
     */
    this.NOMBRECOMPLETO;

    /**
     * [NOMBRE propiedad que almacena la fecha de nacimiento]
     * @type {Date}
     */
    this.NACIMIENTO = [];

    /**
     * [EDAD propiedad que almacena la edad de la persona]
     * @type {Number}
     */
    this.EDAD;

    //asigno el nombre completo
    this.asignarNombreCompleto();
    //asigno la fecha de nacimiento
    this.setNacimiento(pData.nacimiento);
  }


  /** -------------------------------------------------- **/
  /** -------------------GETTERS------------------------ **/
  /** -------------------------------------------------- **/


  /**
   * [getNombre método que devuelve la propiedad NOMBRE]
   * @return    {string}     [valor actual del NOMBRE]
   */
  getNombre() {
    return this.NOMBRE;
  }

  /**
   * [getApellido método que devuelve la propiedad APELLIDO]
   * @return    {string}     [valor actual del APELLIDO]
   */
  getApellido() {
    return this.APELLIDO;
  }

  /**
   * [getEdad método que devuelve la propiedad EDAD]
   * @return    {Number}    [valor actual de la EDAD]
   */
  getEdad() {
    return this.EDAD;
  }

  /**
   * [getNacimiento método que devuelve la propiedad NACIMIENTO]
   * @return {Date}
   */
  getNacimiento() {
    return this.NACIMIENTO;
  }


  /** -------------------------------------------------- **/
  /** -------------------SETTERS------------------------ **/
  /** -------------------------------------------------- **/


  /**
   * [setNombre metodo que módifica la propiedad NOMBRE]
   * @param {string}    pNombre     [valor del NOMBRE a asignar]
   */
  setNombre(pNombre) {
    this.NOMBRE = pNombre;
  }

  /**
   * [setApellido método que modifica la propiedad de APELLIDO]
   * @param {string}    pApellido    [valor del APELLIDO a asignar]
   */
  setApellido(pApellido) {
    this.APELLIDO = pApellido;
  }

  /**
   * [setEdad método que modifica la pripiedad EDAD]
   * @param {Number}    pEdad     [valor de la EDAD a asignar]
   */
  setEdad(pEdad) {
    this.EDAD = pEdad;
  }

  /**
   * [setNombreCompleto método que modifica la propiedad NOMBRECOMPLETO]
   * @param {string}    pNombre     [valor de NOMBRE a asignar]
   * @param {string}    pApellido   [valor de APELLIDO a asignar]
   */
  setNombreCompleto(pNombre, pApellido) {
    //cambio el nombre
    setNombre(pNombre);
    //cambio el apellido
    setApellido(pApellido);
    //asigno el nombre completo
    this.NOMBRECOMPLETO = `${this.getNombre()} ${this.getApellido()}`;
  }

  /**
   * [setNacimiento método que modifica la propiedad NACIMIENTO]
   * @param {string} pFechaNacimiento
   */
  setNacimiento(pFechaNacimiento) {
    //valido el parametro
    if (pFechaNacimiento != '') {
      //separo la cadena de texto
      let dataFecha = pFechaNacimiento.split('-');
      //creo la fecha
      //la asigno a la propiedad
      this.NACIMIENTO = new Date(dataFecha[0], (dataFecha[1] - 1), dataFecha[2]);
    }
  }

  /** -------------------------------------------------- **/
  /** -------------------MÉTODOS------------------------ **/
  /** -------------------------------------------------- **/

  /**
   * [asignarNombreCompleto función que asigna el nombre completo]
   * @return {none}
   */
  asignarNombreCompleto() {
    this.NOMBRECOMPLETO = `${this.getNombre()} ${this.getApellido()}`;
  }

}