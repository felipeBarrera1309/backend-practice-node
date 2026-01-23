import fs from 'fs/promises'

Promise.all([
	fs.readFile('./1-os-info.js', 'utf-8'),
	fs.readFile('./newFile.js', 'utf-8')
]).then(([contentOne, contentTwo]) => {
	console.log('Content first file: ', contentOne)
	console.log('Content second file: ', contentTwo)
}).catch(error => console.log('Este es el error por el cual no pudo hacer todos los procesos en paralelos, uno o varios fallaron: ', error))
