import express from 'express'
import rutaApi from './rutas.mjs'

const PUERTO = 3000

const app = express()
app.listen(PUERTO)


app.use(rutasV1)