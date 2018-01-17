/**
 * [listaPersonas listado de personas que ingresarán al cine]
 * @type {Array}
 */
const listaPersonas = [{
  nombre: 'Juan Carlos Castañeda Trujillo',
  edad: 32,
}, {
  nombre: 'Diana Mora',
  edad: 12,
}];

/**
 * [listaPeliculas listado de peliculas en el cine]
 * @type {Array}
 */
const listaPeliculas = [{
  nombre: 'STARWARS el despertar de la fuerza',
  pg: 13,
  compania: 0
}]


/**
 * [listaRealPersonas listado de personas objeto que ingresarán al cine]
 * @type {Array}
 */
var listaRealPersonas = [];

/**
 * [listaRealPeliculas listado de películas obheto que se presentan en el cine]
 * @type {Array}
 */
var listaRealPeliculas = [];

/**
 * [iniciarPersonas Arrow función que itera las personas]
 * @return {none}
 */
const iniciarPersonas = () => {
  //itero la data
  for (var itemLista of listaPersonas) {
    //creo la persona como objeto
    let itemPersona = new Persona(itemLista);
    //valido si la persona está acompañada
    if (itemLista.acompanante >= 0) {
      //asigno la persona acompañante
      itemPersona.setAcompanante(listaRealPersonas[itemLista.acompanante])
    }
    //agrego la persona al listado objeto
    listaRealPersonas.push(itemPersona);
  }
}

/**
 * [iniciarPeliculas Arrow function que itera las peliculas]
 * @return {none}
 */
const iniciarPeliculas = () => {
  for (var itemLista of listaPeliculas) {
    //creo la pelicula como objeto
    let itemPelicula = new Pelicula(itemLista.nombre, itemLista.pg);
    //agrego la persona al listado de peliculas objeto
    listaRealPeliculas.push(itemPelicula);
  }
}

/**
 * [puedeEntrar Arrow function que verifica si una persona puede ingresar a ver una película]
 * @param  {Persona}      pPersona          [Persona que va a ingresar]
 * @param  {Pelicula}     pPelicula         [pelicula a la que va a ingresar]
 * @return {none}
 */
const puedeEntrar = (pPersona, pPelicula) => {
  //defino el valor alerta
  let valorAlerta = `${pPersona.NOMBRE} NO puede entrar a ver " - ${pPelicula.NOMBRE} - ", tiene ${pPersona.EDAD} años y para entrar debe tener ${pPelicula.PG} años`;
  //valido la edad y la compañia de la persona
  if (pPersona.EDAD >= pPelicula.PG) {
    //asigno el valor de puede entrar
    valorAlerta = `${pPersona.NOMBRE} SI puede entrar a ver " - ${pPelicula.NOMBRE} - "`;
  } else if (pPersona.ACOMPANANTE != null) {
    //asigno el valor de acompañado
    valorAlerta = `${pPersona.NOMBRE} SI puede entrar a ver " - ${pPelicula.NOMBRE} - ", aunque es menor a ${pPelicula.PG}, está acompañado.`;
  }
  //presento la alerta
  alert(valorAlerta);
}

//inicio el listado real de personas
iniciarPersonas();
//inicio el listad real de peliculas
iniciarPeliculas();