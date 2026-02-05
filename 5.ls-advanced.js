import fs from 'fs/promises'
import path from 'node:path'

/* Quiero hacer un ls, de tal manera que al ejecutar el archivo y pasar un directorio me liste todos los archivos y carpetas */

async function ls(identify) {
	try {
		const data = await fs.readdir(identify)
		return data
	} catch (error) {
		console.log('Error al leer contenido: ', error)
	}
}

/* Hacer lista de contenido de carpeta con nombre, identificar si es archivo o carpeta, tamaño y fecha */

fs.readdir(process.argv[2] ?? '.')
	.then(async data => {
		const contentDir = data.map(async item => {
			const route = path.join(process.argv[2] ?? '.', item)
			const stats = await fs.stat(route)
			const isFile = stats.isFile() ? 'File': 'Dir'
			const size = stats.size.toString()
			const data = stats.mtime.toLocaleString()

			return `- ${ isFile } ${ item.padEnd(25) } ${ size.padEnd(10) } ${ data }`
		})

		const getData = await Promise.all(contentDir)
		getData.forEach(item => console.log(item))
	})
	.catch(error => console.log('Error: ', error))
