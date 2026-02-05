/* Información básica del objeto process */

console.log('process ID', process.pid);
console.log('node version: ', process.version)
console.log('operating system name: ', process.platform);

console.log('Ruta donde estoy ejecutando mi proceso: ', process.cwd())

/* Variables de entorno */
const mode = process.env.NODE_ENV || 'development'
console.log('App mode: ', mode)

//* Argumentos de terminal */
console.log('Estos son los argumentos que se ven cuando ejecuto node en mi terminal: ', process.argv.slice(1))

process.on('SIGINT', () => {
	console.log('Proceso interrumpido');
	process.exit(0);
});

/* Manejo de salida estandar */
process.stdout.write('Hello world!!!')

process.stdin.on('data', (data) => {
	console.log('Esto es lo que escribi: ', data.toString().trim())
})

/* Eventos importantes con on en process */

process.on('exit', function() {
	console.log('Esto se va a ejecutar siempre al final de la lectura del proceso')
})

process.on('beforeExit', (data) => {
	console.log('Este es el mensaje que se muestra antes de que se cierre el proceso en mi archivo js: ', data)
})

process.nextTick(() => {
	console.log('Esto se va a ejecutar primero');
});