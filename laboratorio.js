
// Fecha 19 de marzo 2026
// Ejercicios de Estructuras de Datos en JavaScript - grupo 2
// nombres : Luis Salgado, Daniel Felipe Avila , Fernando Alayón, Andres Diaz Figuerooa


// punto 1 : - Una app para calcular propinas en restaurantes.
// Crea una función calcularPropina(total, porcentaje) que reciba el 
// total de la cuenta y el porcentaje de propina, y retorne el monto final
// a pagar (total + propina).

function calcularPropina(cuenta, porcentaje) {
        let total = cuenta + ((porcentaje * cuenta )/100);
        console.log(total)
        return total
}

let cuenta1 = 100;
let porcertaje1 = 15; 

calcularPropina(cuenta1,porcertaje1)


// Ejercicio 2: Validar Contraseña
//- Formulario de registro.
// Crea una función validarContraseña(contraseña) que retorne true si:
// - Tiene al menos 8 caracteres.
// - Incluye un número.
// - Incluye una mayúscula.


function validarContraseña(Escribecontraseña){
        let longitud =  Escribecontraseña.length >= 8;
        let DebeTenerNumero = /\d/.test(Escribecontraseña);
        let DebeTenerLetraMayuscula = /[A-Z]/.test(Escribecontraseña)
        return longitud && DebeTenerNumero && DebeTenerLetraMayuscula;
}

console.log(validarContraseña("Andres123")); // true


// Ejercicio 3: Buscar Producto en Inventario
//- Sistema de gestión de inventario.
//Crea una función buscarProducto(nombre, inventario) que retorne el producto si existe, o null si no. El inventario debería estar PREDEFINIDO
//ejemplo:
// const inventario = [
//{ nombre: "Camisa", precio: 20 },
//{ nombre: "Zapatos", precio: 50 }
// ];


const inventario = [ 
        {producto:"papitas", precio: 100},
        {producto: "doritos", precio: 500},
        {producto:"chitos", precio: 600},
        {producto:" manimoto", precio:700}
];


function buscarProducto(nombre, inventario){
        for (let i = 0; i < inventario.length; i++){
                busqueda = inventario[i]
                if (nombre == busqueda.producto){
                        return busqueda
                }
        }
        return null
}   

let producto = "chitos"
buscarProducto(producto, inventario)
busqueda = buscarProducto(producto, inventario)
console.log(busqueda)

// Ejercicio 4: Calcular Promedio de Notas
// - Plataforma educativa.
// Crea una función calcularPromedio(notas) que reciba un array de notas dado por el usuario (separadas por comas) y retorne el promedio (redondeado a 2 decimales).


const notas = [7,8,6,4]

function calcularPromedio(notas) {
        if(notas.length === 0)
                return 0;
        let suma = 0;
        for (let i = 0; i < notas.length; i++){
                suma += notas[i]
        }
        return suma / notas.length;
}

let promedio = calcularPromedio(notas);
console.log(promedio.toFixed(2));



// Ejercicio 5: Filtrar Usuarios por Edad
// - Red social.
// Dado un array de usuarios ([{ nombre: "Ana", edad: 25 }, ...]), crea una función 
// filtrarUsuarios(usuarios, edadMinima) que retorne los usuarios que cumplen con la 
// edad mínima, la cual será dada por el usuario, es decir, si el usuario escribe 18, 
// debería decirle que personas de la lsita cumplen con tener más de 18.

function filtraUsuarioGeneration(usuarios, edadMinima) {
  // Filter users with age >= edadMinima
  return usuarios.filter(usuario => usuario.edad >= edadMinima);
}
const usuarios = [
  { nombreEstudiante: "luis", edad: 37 },
  { nombreEstudiante: "ana", edad: 25 },
  { nombreEstudiante: "guillermo", edad: 23 },
  { nombreEstudiante: "jeison", edad: 16 },
  { nombreEstudiante: "jirley", edad: 50 },
];
const resultado = filtraUsuarioGeneration(usuarios, 18);
// resultado
console.log("Usuarios mayores de edad que estudian en Generation:");
console.log(resultado)



// Ejercicio 6: Contador de Palabras
// -Editor de texto.
// Crea una función contarPalabras(texto) que retorne el número de palabras en un string (separadas por espacios).


function contarPalabras(texto) {
  let pasarpalabras = 0;
  let confirmaPalabra = false;
  for (let i = 0; i < texto.length; i++) {
    const caracter = texto[i];
    if (caracter !== " ") {   // Si el caracter no es un espacio vacio
      if (!confirmaPalabra) {   // Sino es una palabra es porque estamos comenzando una nueva palabra en la frase
        pasarpalabras++;  // Incrementa el contador de las palabras
        confirmaPalabra = true; // cambia el estado de la variable
      }
    } else {
      confirmaPalabra = false;  // Si es un espacio es porque ya no estamos en una palabra
    }
  }

  return pasarpalabras;
}


console.log(contarPalabras("generation Colombia"));        // debe dar 2
console.log(contarPalabras("sala dos"));                   // debe dar 3
console.log(contarPalabras(""));                           // debe dar 0
console.log(contarPalabras("   "));                        // debe dar 0
console.log(contarPalabras("Aqui hay trespalabras"));      // debe dar 3


// Ejercicio 7: Simulador de Cajero Automático
// -App bancaria.
// Crea una función retirarDinero(saldo, monto) que:
// Pide al usuario su saldo actual y el monto a retirar.
// Muestra el nuevo saldo o "Fondos insuficientes".

//Funcion para retirar dinero
const prompt = require('prompt-sync')();
function retirarDinero(saldo, monto){
    if(monto > saldo){
        console.log("Fondos insuficientes")
    }
    else{
        nuevosaldo = saldo - monto
        console.log("Nuevo saldo: ", nuevosaldo)
    }

};

console.log("*****CAJERO AUTOMATICO*****");
let op = prompt("Ingrese la opcion que desea ejecutar: 1.Retirar dinero, 2.Salir");
if(op == 1){
    let saldo = prompt("Ingrese su saldo: ");
let monto = prompt("Ingrese su saldo: ");
retirarDinero(saldo, monto);
}
else{
    console.log("Saliendo...")
}


// Ejercicio 8: Cambio de Moneda
// -App de viajes.
// Crea una función convertirMoneda(monto, monedaDestino) que convierta de pesos a USD o EUR,
// pedir al usuario monto en COP y la moneda con la que desea hacer la converción.



function convertirMoneda(monto, monedaDestino) {
        const tasaCambio = {
                USD: 0.00027,
                EUR: 0.00023
        };
        if (tasaCambio[monedaDestino]) {
                return monto * tasaCambio[monedaDestino];
        }
        return 0;
}

let monto = 100000;
let monedaDestino = "USD";
let montoConvertido = convertirMoneda(monto, monedaDestino);


let monto2 = 200000;
let monedaDestino2 = "EUR";
let montoConvertido2 = convertirMoneda(monto2, monedaDestino2);

console.log(`Monto en ${monedaDestino2}: ${montoConvertido2.toFixed(2)} y Monto en ${monedaDestino}: ${montoConvertido.toFixed(2)}`);
