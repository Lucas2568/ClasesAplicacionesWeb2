import express from 'express'

const Puerto = 3000


const app = express()

app.listen(Puerto, () => {
    console.log(`Servidor corriendo http://localhost:${Puerto}`)
})

// Configurar rutas. req = request, res = response
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

//Rutas con parametros
app.get('/:id', (req, res) => {
    const id = Number(req.params.id)
    //----
    const usuarios = [{
        nombre: 'Lucas',
        email: 'lucas.lantieri.98@gmail.com',
        id: 1
    },
    {
        nombre: 'Mirko',
        email: 'mirkolantieri@gmail.com',
        id: 2
    }    
    ]
    //----
        const usuarioFiltrado = usuarios.filter(((usuario) => {
            return usuario.id === id

        }))
    if (usuarioFiltrado.length > 0) {
        res.json(usuarioFiltrado)
    } else { 
        console.log({mensaje: 'Usuario no encontrado'})
    }
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
