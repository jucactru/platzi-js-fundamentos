class Toggotable {

  /**
   * [constructor]
   * @param {button} pElemento [boton al que se le hará el tratamiento de toogle]
   */
  constructor(pElemento) {
    /**
     * [BOTON propiedad que contendrá el botón enviado]
     * @type {button}
     */
    this.BOTON = pElemento

    /**
     * [ACTIVATED propiedad que controla el estado interno]
     * @type {Boolean}
     */
    this.ACTIVATED = false

    //aseguro que el estado sea off
    this.BOTON.innerHTML = 'Off'
    //asigno el evento click al botón
    this.BOTON.addEventListener('click', this.onClick.bind(this))
  }

  /**
   * [onClick Método que maneja el cambio de estado del botón]
   * @param  {Event}  e   [evento recibido]
   * @return {none}       [no hey retonro]
   */
  onClick(e) {
    //cambiar el estado interno del botón
    this.ACTIVATED = !this.ACTIVATED
    //llamar toggleText
    this.toggleText()
  }
  /**
   * [toggleText Método que cambia el téxto del botón dependiendo del estado interno del mismo]
   * @return {none} [No hay retorno]
   */
  toggleText() {
    //asigno el texto del botón dependiendo su estado interno
    this.BOTON.innerHTML = this.ACTIVATED ? 'On' : 'Off'
  }


}