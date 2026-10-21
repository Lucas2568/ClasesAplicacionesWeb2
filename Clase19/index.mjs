import express from 'express'
import dotenv from 'dotenv'

import pool from './conexion.bd.mjs'

dotenv.config()

console.log(process.env)

const PUERTO = process.env.PUERTO || 3000

const app = express()


//Obtener productos
app.get('/api/v1/productos', async (req, res) => {
    const resultado = await pool.query('SELECT * FROM productos')
    console.log(resultado.rows)
    res.json(resultado.rows)
})

//Obtener productos con id

app.get('/api/v1/productos/:id', async (req, res) => {
    const id = Number(req.params.id)
    const resultado = await pool.query('SELECT * FROM productos WHERE id=$1', [id])
    console.log(resultado.rows)
    res.json(resultado.rows)
})

app.delete('/api/v1/productos/:id', async (req, res) => {
    const id = Number(req.params.id)
    const resultado = await pool.query('DELETE FROM productos WHERE id=$1', [id])
    console.log(resultado.rows)
    res.json(resultado.rows)
})
app.listen(PUERTO)
