import express from "express";

const Puerto = 3000

const app = express()

app.listen(Puerto, () => {
    console.log(`Servidor corriendo http://localhost:${Puerto}`)
})

// El middleware sirve una web estatica 
app.use(express.static('./web'))

const middle1 = (req, res, next) => {
    console.log('Se ejecuto un middleware1')
    next()
}
const middle2 = (req, res, next) => {
    console.log('Se ejecuto un middleware2')
    next()
}


app.use('/saludo', middle1)

app.get('/',(req, res) => {
    console.log('/')
    res.end()
})

app.get('/saludo',(req, res) => {
    console.log('/saludo')
    res.end()
})