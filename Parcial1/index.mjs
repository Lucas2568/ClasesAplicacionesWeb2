import express from 'express'

const Puerto = 3000


const app = express()

app.listen(Puerto, () => {
    console.log(`Servidor corriendo http://localhost:${Puerto}`)
})

app.get('/', (req, res) => {
    const usuarios = [{
        nombre: 'Lucas',
        email: 'lucas.lantieri.98@gmail.com' 
    },
    {
        nombre: 'Mirko',
        email: 'mirkolantieri@gmail.com'
    }    
    ]
    res.json(usuarios)
})


app.get('/', (req, res) => {
    const usuarios = [{
        nombre: 'Lucas',
        email: 'lucas.lantieri.98@gmail.com' 
    },
    {
        nombre: 'Mirko',
        email: 'mirkolantieri@gmail.com'
    }    
    ]
    res.json(usuarios)
})


app.post('/', (req, res) => {
    const usuarios = [{
        nombre: 'Lucas',
        email: 'lucas.lantieri.98@gmail.com',
    },
    {
        nombre: 'Mirko',
        email: 'mirkolantieri@gmail.com',
    }    
    ]
    res.json(usuarios)
})