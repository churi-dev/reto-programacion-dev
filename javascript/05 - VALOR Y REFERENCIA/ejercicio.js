// 1. Asignacion de variables por valor / tipos primitivos

let a = 10;

let nuevo = a; // obtiene una copia de a

b = 20;

// 2. Asignacion de variables por referencia / objetos, arreglos
let objeto1 = { nombre: "Jhon" };

let objeto2 = objeto1;

objeto1.nombre = "Jhon Churivanti";
console.log(objeto1);
console.log(objeto2);

// 3. funciones por parametro valor
function cambiarNumero(numero) {
    numero = 100;
}

let numero = 20;
cambiarNumero(numero);

console.log(numero);

// 4. funciones por parametro por referencia
function cambiarObjeto(objeto) {
    objeto.nombre = "Val";
}

let persona = { nombre: "Rodri"};
cambiarObjeto(persona);
console.log(persona.nombre);