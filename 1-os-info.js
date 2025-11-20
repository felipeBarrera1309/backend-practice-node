const os = require('node:os')

console.log('Voy a traer la información del nombre del sistema operativo: ')
console.log('--------------------------------------------------------------')


console.log('This is name operating system: ', os.platform())
console.log('Version del sistema operativo: ', os.release())
console.log('Arquitectura del sistema operativo:', os.arch())
console.log('Cantidad de CPUs del sistema operativo: ', os.cpus())
console.log('Cantidad de memoria disponible', os.freemem() / 1024 / 1024)
console.log('Memoria total', os.totalmem() / 1024 / 1024)
console.log('Tiempo que esta encendido mi sistema operativo: ', os.uptime() / 60 / 60)//Append file para agregar file