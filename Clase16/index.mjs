import express from 'express'
import rutasModulosProductos from './modulos/productos/productos.rutas.mjs'

const PUERTO = 3000

const app = express()
app.use(rutasModulosProductos)
app.listen(PUERTO)

