import express from 'express'
const Puerto = 3000
const app = express()


// Configurar rutas. req = request, res = response
app.get('/', (req, res) => {
    //res.end('Hola Express')
    //res.send('Mensaje desde .send')
    res.send({mensaje: "hola"}) // toma el objeto y lo transforma a json
    
})















app.listen(Puerto, () => {
    console.log(`Servidor Express corriendo puerto ${Puerto}`)
})
