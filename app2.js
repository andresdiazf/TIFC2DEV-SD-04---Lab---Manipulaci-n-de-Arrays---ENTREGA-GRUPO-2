let learners = ["Juan", "Maria", "Pedro", "Ana", "Luis"];

console.log(learners[0]); // Juan
console.log(learners[1]); // Maria
console.log(learners[2]); // Pedro
console.log(learners[3]); // Ana
console.log(learners[4]); // Luis
console.log(learners[5]); // 

// ! añadir elementos a un array
learners.push("Juanda");
console.log(learners);

// ! borrar
learners.pop();
console.log(learners);

// ! añadir buscar un elemento

console.log(learners.includes("Maria")); // true
console.log(learners.includes("Juanda")); // false        

let carrito = [];
let producto1 = {
    nombre: "Camisa",
    precio: 20  
}


// ! objetos

let estudiantes = {
    nombre: "Juan",
    edad: 25,
    curso: "Programación"
    hobbies: ["futbol", "musica"]
}

console.log(estudiantes.nombre); // Juan
console.log(estudiantes.edad); // 25
console.log(estudiantes.curso); // Programación


console.log(estudiantes["curso"]);

estudiantes.edad = 26;
console.log(estudiantes.edad); // 26    
 
estudiantes.hobbies,push("cine");
console.log(estudiantes.hobbies); // ["futbol", "musica", "cine"]

console.log(Object.keys(estudiantes)); // ["nombre", "edad", "curso", "hobbies"]
console.log(Object.values(estudiantes)); // ["Juan", 26, "Programación", ["futbol", "musica", "cine"]]


 





