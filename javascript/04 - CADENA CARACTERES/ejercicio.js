// cadena simple
let nombre = "Jhon Churivanti";

// acceder a un caracter de una cadena, puede ser como un arreglo por indice
console.log(nombre[0]); // J

// con metodo para seleccionar un caracter, tambien es por indice
console.log(nombre.charAt(1)); // h

// saber la longitud o tamaño de nuestro elemento
console.log(nombre.length);

// subcadenas
console.log(nombre.slice(0, 4)); // arreglos y objetos
console.log(nombre.substring(5)); // empieza en 5 // cadena

// concatenacion / interlpolacion
let mensaje = `Saludo, soy ${nombre}`;
console.log(mensaje);

// para repetir varias veces una cadena
console.log(nombre.repeat(3));

// conversion de mayuscuala a minuscula
console.log(nombre.toUpperCase()); // mayuscula
console.log(nombre.toLowerCase()); // minuscula

// reemplazo de valor,
// primero busca el valor a reemplazar
// si se encuentra actualiza con el valor, si no no actualiza
console.log(nombre.replace("Jhon", "Alva"));

// reemplazo para todos 
console.log("a-b-c-b-d-b".replaceAll("b","i"));

// division de cadena por partes
const nombres = "a-b-c-d-e-f-b";
console.log(nombres.split("-"));

// unir cadenas desde arreglos
const frutas = ["naranja", "platano"];

console.log(frutas.join(" "));

// verificar texto o contenido
console.log(frutas.includes("naranja")); // verifica si esta incluido el valor
console.log(nombres.startsWith("a")); // empieza en el inicio
console.log(nombres.endsWith("f")); // si se encuentra en el final
console.log(nombres.indexOf("b")); // muestra el primer indice coincidente
console.log(nombres.lastIndexOf("b")); // muestra el ultimo indice coincidente

// eliminar espacios
const saludo = "  Hola ";
console.log(saludo.trim()) // elimina el espacio vacio
console.log(saludo.trimStart()) // elimina espacio inicial 
console.log(saludo.trimEnd()) // elimina espacio final

// recorrer una cadena
const empleados = "Juan";
for (let index = 0; index < empleados.length; index++) {
    console.log(empleados[index]);
}

// aqui con in solo devuelve indice
for (let value in empleados) {
    console.log(value);
}

// aqui con of devuelve valor
for (let value of empleados) {
    console.log(value);
}

// Conversion de variable numero a cadena <>

let numero = 20;

let cadena = String(numero);
console.log(typeof cadena);

let cadenaNumero = Number(cadena);
console.log(typeof cadenaNumero);

// comparacion de cadenas
// == -> solo compara valor
let variable1 = 40;
let variable2 = "40";

console.log(variable1 == variable2);

// === -> compara tipo y valor
console.log(variable1 === variable2);

// Cadena vacia

const texto = "";
console.log(texto.length === 0);
console.log(texto === "");

/* EJERCICIO */
/*
Crea un programa que analice dos palabras diferentes y realice comprobaciones
 * para descubrir si son:
 * - Palíndromos
 * - Anagramas
 * - Isogramas
*/

function analizadoPalabras(palabra) {
    if (palabra.length === 0) {
        console.log("Por favor introduce 1 palabra.");
    } else {
        let verificar = isPalindromo(palabra.toLowerCase());
        if (verificar) {
            console.log("Es palindromo");
        } else {
            console.log("No es palindromo");
        }
    } 
}

function isPalindromo(texto) {
    let isTrue = false;
    let verficar = [];
    for (let i = texto.length - 1; i >= 0; i--) {
        verficar.push(texto[i]);
    }
    let comparar = verficar.join("");
    if (comparar === texto) {
        isTrue = true;
    }

    return isTrue;
}

function palindromo2(texto) {
    console.log(texto.toLowerCase().split("").reverse().join("") === texto.toLowerCase());
}

function anagrama(texto, texto2) {
    let compare1 = texto.toLowerCase().split("").sort().join("");
    let compare2 = texto2.toLowerCase().split("").sort().join("")
    
    return compare1 === compare2;
}

function isograma(texto) {
    let mySet = new Set(texto);
    return mySet.size === texto.length;
}

analizadoPalabras("Arenera");

console.log(anagrama("tora", "taro"));

console.log(isograma("murcielago"));
