function saludarFamilia(pApellido) {
  return function saludarMiembro(pNombre) {
    console.log(`Hola ${pNombre} ${pApellido}`);
  }

  return function vamosProbando(pNombre) {
    console.log(`Hola vamos probando ${pNombre} ${pApellido}`);
  }
}

const saludarFamiliaCastaneda = saludarFamilia('Castañeda');
const saludarFamiliaMora = saludarFamilia('Mora');



function makePrefijo(pPrefijo) {
  return function construirPrefijo(pPalabra) {
    console.log(`${pPrefijo}-${pPalabra}`)
  }
}

const prefijoRe = makePrefijo('Re');
const prefijoIn = makePrefijo('In');