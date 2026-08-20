import { writeFile } from 'node:fs'
import fsp from 'node:fs/promises'
import path from 'node:path'
const ruta = path.join('./usuario.json')

let usuario = ''
try {
    usuario = await fsp.readFile(ruta, 'utf8')
} catch (error) {
    console.log(error.message)
}

const objetoUsuario = JSON.parse(usuario)
console.log(objetoUsuario.nombre)

// Escribir archivo

try {
    const ruta = path.join('./saludo.txt')
    await fsp.writeFile(ruta, '\nEscribiendo archivo2', {
        encoding: 'utf-8',
        flag: 'a'

    })
} catch (error) {
    console.log(error.message)
}