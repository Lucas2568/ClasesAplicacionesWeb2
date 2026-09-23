import express from 'express'
import { middleClave } from '../Clase12/middleware.mjs'
const Puerto = 3000
const logs = [{compu: 91, estado: "activo", clave: "1234"}]
const app = express()
app.use(express.json());


app.listen(Puerto, () => {
    console.log(`Servidor corriendo http://localhost:${Puerto}`)
})

app.get('/estado',(req, res) => {
   res.json(logs)
})

//crear arreglo donde guardaremos como un log de estados

/*app.post('/estado',(req, res) => {
    logs.push(req.body)
    res.json(logs)
})*/

app.post('/estado', middleClave, (req, res) => {
    logs.push(req.body)
    res.json(logs)
})

//Funcion del profe

/*
function chequearClave(req, res, next) {
    const clave = req.body.clave
    if (clave === clave) {
        next()
    }
    res.status(403).json({mensaje: 'clave incorrecta'})
}*/



