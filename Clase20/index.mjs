import express from 'express';
import dotenv from 'dotenv';
import path from 'node:path';
import multer from 'multer';
import pool from './conexion.bd.mjs'


dotenv.config()

const PUERTO = process.env.PUERTO

const subirArchivo = multer({
    dest: path.resolve('archivos')
}).single('archivo')

//subirArchivo.single('archivo')

const app = express()

app.post('/subir', (req, res) => {
    subirArchivo(req, res, async(error) => {
        if(error) {
            return res.status(500).json({mensaje: 'no se pudo subir la imagen'})
        } try {
            await pool.query(`INSERT INTO productos(producto, precio, imagen) 
                VALUES($1, $2, $3)`, [req.body.producto, req.body.precio, req.file.filename])
        } catch {
            (error)
            // Buscar metodo para borrar imagen si no se subio 
        }
        res.json({mensaje: 'datos cargados'})
    })
})


app.use(express.static(path.resolve('publico')))

app.listen(PUERTO)