/**
 * [Pelicula clase que representa las peliculas en el cine]
 */
class Pelicula {

  /**
   * [constructor de la clase]
   * @param {string}    pNombre     [Nombre de la película]
   * @param {Number}    pPg         [Edad máxima para visualizar la película]
   * @param {Number}    pCompania
   */
  constructor(pNombre, pPg, pCompania = 0) {
    /**
     * [NOMBRE propiedad que almacena el nombre de la película]
     * @type {string}
     */
    this.NOMBRE = pNombre;

    /**
     * [PG propiedad que almacena la edad máxima para ingresar libremente a la película]
     * @type {Number}
     */
    this.PG = pPG;

    /**
     * [COMPANIA propiedad que permite detectar si la pelicula permite compañía a las personas que no cumplan con el PG]
     * @type {Number}
     */
    this.COMPANIA = pCompania;
  }

  /**
   * [getPG Método que devuelve el valor PG del objeto]
   * @return    {Number}    [valor actual de la propiedad PG]
   */
  getPG() {
    return this.PG;
  }

  /**
   * [getNombre método que devuelve el valor de la propiedad NOMBRE]
   * @return    {string}     [valor actual de la propiedad NOMBRE]
   */
  getNombre() {
    return this.NOMBRE;
  }

  /**
   * [getCompania método que devuelve el valor de la propiedad COMPANIA]
   * @return    {Number}    [Valor actual de la propiedad COMPANIA]
   */
  getCompania() {
    return this.COMPANIA;
  }

  /**
   * [setPG Método que modifica la propiedad PG]
   * @param     {Number}    pPG     [valor de PG a cambiar]
   */
  setPG(pPG) {
    this.PG = pPG;
  }

}