/**
 * [juan objeto persona]
 * @type {JSON}
 */
const juan = {
  nombre: 'Juan Carlos',
  apellido: 'Castañeda Trujillo'
}

/**
 * [saludar Función que realiza el saludo a una persona]
 * @param  {Number}   pCantidad   [Cantidad de veces que se saludará]
 * @param  {Boolean}  pUppercase  [Opción para saludar en altas o bajas]
 * @return {None}                 [no hay retorno]
 */
const saludar = (pCantidad, pUppercase) => {
  //creo la cadena de texto
  let str = `Hola ${this.nombre} ${this.apellido}`
  //cambio la cadena dependeidendo de parametro pUppercase
  str = pUppercase ? str.toUpperCase() : str
  //itero la cantidad de veces
  for (let i = 0; i < pCantidad; i++) {
    console.log(str);
  }
}

console.log('---')
//llamo la función con Call
saludar.call(juan, 3, false)
saludar.call(juan, 1, true)
console.log('---')
//llamo la funció con Apply
saludar.apply(juan, [3, false]);
saludar.apply(juan, [2, true]);
console.log('---')