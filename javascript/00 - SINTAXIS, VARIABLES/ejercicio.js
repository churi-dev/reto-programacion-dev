// callbacks
/*function traerDatos(callback) {
    console.log("Generando datos...");
    setTimeout(() => {
        callback("Datos cargados");
    }, 2000);
}

traerDatos((data) => console.log(data));`


// Promises
const traerDatos = () => {
    return new Promise((resolve, reject) => {
        console.log("datos...");
        setTimeout(() => {
            resolve("datos cargados")
        }, 2000);
    })
}

traerDatos().then((data) => {
    console.log(data);
}).catch((error) => console.log(error));


// Asyn / Await

// asyn -> convierte un funcion en en una funcionq que devuelve un promesa

// await -> pausa la ejecucion de la funcion hasta que la promesa sea resu

const traerDatos2 = () => {
    return new Promise((resolve, reject) => {
        console.log("datos...");
        setTimeout(() => {
            resolve("datos cargados")
        }, 2000);
    })
}

const procesaDatos = async () => {
    try {
        const data = await traerDatos2();
        console.log(data);
        console.log("Procesando datos");
    } catch (error) {
        console.error(error);
    }
}
procesaDatos();
*/

// Crea un comentario en el código y coloca la URL del sitio web oficial del lenguaje de programación que has seleccionado.

// Para este desarrollo estoy empezando con el lenguaje de Javascript
// Javascript: https://developer.mozilla.org/en-US/docs/Web/JavaScript


// Representa las diferentes sintaxis que existen de crear comentarios en el lenguaje (en una línea, varias...).

// Sintáxis de comentario de una sola linea

/*
    Sintáxis de comentario para varias lineas
*/

// Crea una variable (y una constante si el lenguaje lo soporta).

let nameUserGitHub = "churi-dev";

const LAST_NAME = "Churivanti";

// Crea variables representando todos los tipos de datos primitivos del lenguaje (cadenas de texto, enteros, booleanos...).
let ageUser = 20; // entero
let userName = "Juan"; // cadena
let decimalNumer = 20.40; // decimal
let isTrue = true; // booleano
let number; // undefined

// Imprime por terminal el texto: "¡Hola, [y el nombre de tu lenguaje]!"
let textMessage = `!Hola, Javacript - 2025`;
console.log(textMessage);

