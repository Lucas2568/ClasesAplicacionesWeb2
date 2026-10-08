import { Router } from "express";
import * as controlador from './productos.controlador.mjs'

const rutasModulosProductos = new Router()

rutasModulosProductos.get('/api/v1/productos', controlador.obtenerProductos)

export default rutasModulosProductos