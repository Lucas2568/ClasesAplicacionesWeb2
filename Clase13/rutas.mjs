//import express from 'express'
import { Router } from 'express'

const rutaApi = new express.Router()
// /api/vi -> vi indica version 1, muy importante utilizarlo en el examen
app.get('/api/vi/camisetas',(req, res) => {
   res.json([{
    "id" : 1,
    "nombre": "Talleres",
    "precio" : 120000
   }])
})

app.get('/api/vi/camisetas/:id',(req, res) => {
    const id = req.params.id
   res.json([{
    "id" : 1,
    "nombre": "Talleres",
    "precio" : 120000
   }])
})


export default rutaApi
