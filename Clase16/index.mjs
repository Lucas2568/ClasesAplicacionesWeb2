import express from 'express'
import dotenv from 'dotenv'
import rutasModulosProductos from './modulos/productos/productos.rutas.mjs'

dotenv.config()

console.log(process.env)

const PUERTO = 3000

const app = express()
app.use(rutasModulosProductos)
app.listen(PUERTO)

