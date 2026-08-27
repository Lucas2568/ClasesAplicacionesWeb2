// trabajar con un objeto

const productos = [
    {
        nombre: 'pantalon',
        precio: 100
    },
    {
        nombre: 'remera',
        precio: 50
    }
]

// Filter -> .filter()
// Ver documentacion MDN de arrays


// Me devuelve un nuevo arreglo al igual que map
const productosFiltrados = productos.filter((producto) => {
    return Number(producto.precio < 100) //con la propiedad number nos aseguramos de convertirlo a numero

})

console.log(productosFiltrados)

//investigar .find()
// Find devuelve el primer elemento encontrado. No devuelve un arreglo. Si no
// lo encuentra, devuelve undefined o null. 