const numeros = [1,2,3,4,5,6]
// map
/*const recorrer = () => { //funcion flecha son anonimas (sin nombre)

}


numeros.map(recorrer) // map recorre el arreglo completo. Aca hacemos un callback
*/

//esto tamb es un callback
const nuevoArreglo = numeros.map((numero) => { //map me crea un nuevo arreglo y por eso lo puedo guardar
    console.log(numero)
    return numero
} ) 

console.log(nuevoArreglo)



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

const productosConInteres = productos.map((producto) => {
    const productoCambiado = {
        nombre: producto.nombre,
        precio: producto.precio * 1.1

    }
    
    return productoCambiado

}) 

console.log(productosConInteres)