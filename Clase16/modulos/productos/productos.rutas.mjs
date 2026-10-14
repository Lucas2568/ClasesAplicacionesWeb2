import { Router } from "express";
import * as controlador from './productos.controlador.mjs'
import { URL_BASE } from "./productos.urlBase.mjs";
import productos from "../../datos/productos.mjs";

const rutasModulosProductos = new Router()

rutasModulosProductos.get(`${URL_BASE}/productos`, controlador.obtenerProductos)

rutasModulosProductos.get(`${URL_BASE}/productos:id`, controlador.obtenerProductos)

export default rutasModulosProductos