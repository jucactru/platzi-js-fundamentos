/**
 * [reverse Arrow Function que devuelve una cadena de texto en recersa]
 * @param  {string}     str     [Cadena de texto a procesar]
 * @return {string}             [Cadena procesada al reves]
 */
const reverseStr = (str) => str.split('').reverse().join('')

/**
 * [minMay Arrow Function que intercambia las letras entre mayúsculas y minúsculas]
 * @param  {string}     str     [Cadena de texto a trabajar]
 * @return {string}             [Cadena de texto ya procesada con mayúsculas y minúsculas]
 */
const minMayString = (str) => {
  //creo la variable largo de cadena
  var largoCadena = str.length
  //reinicio la cadena traducida
  let strTraduccion = ''
  //creo la variable para mayúsuclas
  let capitalize = true
  //itero la data de str
  for (let i = 0; i < largoCadena; i++) {
    //tomo la letra (caracter) dentro de la cadena
    var char = str.charAt(i)
    //agrego el caracter a la cadena condicionando si se debe hacer en mayúscula o minúscula
    strTraduccion += capitalize ? char.toUpperCase() : char.toLowerCase()
    //cambio el valor de capitalize
    capitalize = !capitalize
  }
  //devuelvo el valor traducido
  return strTraduccion
}


/**
 * [platzom función que realiza la traducción de una cadena de texto, bajo 4 reglas]
 * @param  {string}     str     [Cadena a traducir]
 * @return {string}             [Cadena luego de procesar las reglas de traducción]
 */
function platzom(str) {
  //creo la variable traducción
  let strTraduccion = str;

  //  ---------- REGLA ---------- //
  // Si la palabra original es un palíndromo,
  // ninguna regla anterior cuenta y se devuelve
  // la misma palabra intercalando mayúsculas y minúsculas
  //  --------------------------- //
  if (str == reverseStr(str)) {
    //convierto la cadena
    return minMayString(str)
  }

  //  ---------- REGLA ---------- //
  // Si la palabra termina en "ar",
  // se le quitan esos dos caracteres
  //  --------------------------- //
  if (strTraduccion.toLowerCase().endsWith('ar')) {
    //retiro la dos letras del string
    strTraduccion = str.slice(0, -2);
  }

  //  ---------- REGLA ---------- //
  // Si la palabra inicia con Z,
  // se le añade "pe" al final
  //  --------------------------- //
  if (strTraduccion.toUpperCase().startsWith('Z')) {
    //retiro la dos letras del string
    strTraduccion += 'pe';
  }

  //  ---------- REGLA ---------- //
  // Si la palabra traducida tiene 10 o más letras,
  // se debe partir a la mitad y unir con un guión del medio
  //  --------------------------- //
  const largoPalabra = strTraduccion.length;
  if (largoPalabra >= 10) {
    //creo la variable de la primera mitad;
    let mitadInicial = strTraduccion.slice(0, Math.round(largoPalabra / 2));
    //creo la variable de la segunda mitad;
    let mitadFinal = strTraduccion.slice(Math.round(largoPalabra / 2));
    //uno las mitades
    strTraduccion = `${mitadInicial}-${mitadFinal}`;
  }

  //devuelvo el valor de traducción
  return strTraduccion;
}

console.log(platzom("Programar")) // Program
console.log(platzom("Zorro")) // Zorrope
console.log(platzom("Zarpar")) // Zarppe
console.log(platzom("abecedario")) // abece-dario
console.log(platzom("sometemos")) // SoMeTeMoS