const path = require('node:path')

/* Esto es para crear una nueva ruta y que ese nombre sea reutilizable, sin necesidad de siempre escribir una ruta larga para obtener el mismo archivo. */
const newPath = path.join('/commonJs', 'sum.cjs')

/* El resolve devuelve una ruta absolute, desde la raiz de la carpeta, pasando por el proyecto y luego  llegando al archivo o carpeta que indicaste. */
const absolutePath = path.resolve('./commonJs', 'sum.cjs')

/* Obtener el nombre del último archivo o carpeta que esté indicado en la ruta, y la funcion recibe como segundo parametro el nombre de la extensión del archivo y lo quita. */
const getFileName = path.basename(absolutePath, '.cjs')

/* Obtiene la extensión del último archivo indicado en la ruta, si es una carpeta no obtiene nada. */
const getExtension = path.extname(absolutePath)

/* Quiero obtener el nombre del archivo que tiene mi última carpeta. */
const getFolderName = path.dirname(absolutePath)

/* Convertir la ruta en un objeto. */
const changeRouteToObject = path.parse(newPath)

/* Si una ruta tiene mal escrito el nombre, la corrije, por ejemplo => /namePath///anotherName.js */
const normalizeRoute = path.normalize('/commonJs///index.cjs//')

/* Ejemplo real en express */
const pathExpress = path.join(__dirname, 'newFile.js')

console.log('Voy a obtener el nombre del archivo sin la extensión: ', getFileName)