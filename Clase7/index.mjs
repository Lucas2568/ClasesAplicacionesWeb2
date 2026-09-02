import http from "node:http"
console.log('Inicio')
// Instanciamos un servidor
const servidor = http.createServer((peticion, respuesta) => {
    //console.log(peticion)
    //console.log('entra peticion')

    console.log(peticion.url, peticion.method)

    
    if (peticion.url === '/') {
        respuesta.end('Hola desde el servidor')
    } else if (peticion.url === '/saludo'){
        respuesta.end('Saludo')
    } else {
        respuesta.statusCode = 404
        respuesta.end('No encontrado')
    }


    // otra forma de hacerlo
    if (peticion.url === '/' && peticion.method === 'GET') {
        respuesta.end('Hola desde el servidor')
    } 
    
    if (peticion.url === '/saludo' && peticion.method === 'GET'){
        respuesta.end('Saludo')
    }  
    if (peticion.url === '/saludo' && peticion.method === 'POST'){
        respuesta.end('Saludo')
    } 
    respuesta.statusCode = 404
    respuesta.end('No encontrado')
    
})

// Abrimos un puerto y lo ponemos a escuchar
servidor.listen(3000, () => {
    console.log('Servidor arrancado')
})