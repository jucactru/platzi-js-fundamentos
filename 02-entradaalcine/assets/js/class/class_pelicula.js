/**
 * [Pelicula clase que representa las peliculas en el cine]
 */
class Pelicula {

  /**
   * [constructor de la clase]
   * @param {string}    pNombre     [Nombre de la película]
   * @param {Number}    pPg         [Edad máxima para visualizar la película]
   */
  constructor(pNombre, pPg) {
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
}