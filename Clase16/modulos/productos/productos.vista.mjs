import productos from "../../datos/productos.mjs"
import productos from "../../datos/productos.mjs"
import productos from "../../datos/productos.mjs"

export function obtenerProductos(datos) {
    datos.map((dato) => {
        return{
            "id": dato.id,
            "franquicia": dato.franquicia,
            "valor": dato.valor,
            "color": dato.color
        }
    })
}

export function obtenerProducto(id) {
    // Filtramos
    const productos = productos.filter(producto => producto.id === id)
    return productos
}

