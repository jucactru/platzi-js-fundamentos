/**
 * [baseTriangulo base del tríangulo]
 * @type {Number}
 */
let baseTriangulo = 5;

/**
 * [alturaTriangulo altura del triangulo]
 * @type {Number}
 */
let alturaTriangulo = 7;

/**
 * [areaTriangulo funcion que calcula el área de un tríangulo]
 * @param  {[Number]}   pBase   [base del triángulo]
 * @param  {[Number]}   pAlto   [altura del triángulo]
 * @return {[Number]}           [Area del triángulo]
 */
const areaTriangulo = (pBase, pAlto) => pBase * pAlto / 2;

/**
 * [areaCuadrado funciron que calcula el área de un cuadrado]
 * @param  {[Number]}   pAncho    [Ancho del cuadrado]
 * @param  {[Number]}   pAlto     [Alto cuadrado]
 * @return {[Number]}             [Área del cuadrado]
 */
const areaCuadrado = (pAncho, pAlto) => pAncho * pAlto;

/**
 * [areaCirculo función que calcula el área de un círculo]
 * @param  {[Number]}   pRadio    [description]
 * @return {[Number]}             [description]
 */
const areaCirculo = (pRadio) => Math.PI * Math.pow(pRadio, 2);


console.log(`EL resultado del área de un tríangulo de base ${baseTriangulo} y altura ${alturaTriangulo} es: ${ areaTriangulo(baseTriangulo, alturaTriangulo) }`);