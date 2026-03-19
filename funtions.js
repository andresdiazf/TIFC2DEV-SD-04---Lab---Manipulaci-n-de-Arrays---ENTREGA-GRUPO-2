function saludar(nombre){
    return "hola estoy probando funciones ATT: " + nombre;
}

console.log(saludar("andres"));


let carrito = [];
let productos = ["Cascos", "Guantes", "Linterna"]
function agregarProducto(producto){
    if(productos.includes(producto)){
        carrito.push(producto);
        console.log(`${producto} añadido`);
    } else {
        console.log(`${producto} no está disponible`);
    }
}
agregarProducto("Linterna");