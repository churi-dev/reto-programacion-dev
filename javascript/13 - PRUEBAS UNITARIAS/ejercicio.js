// pruebas unitarias: Nos permiten verificar como desarrollador si una funcionlidad se ejecuta normalmente ( funcionalidad parte )

/*
* Crea una función que se encargue de sumar dos números y retornar
 * su resultado.
 * Crea un test, utilizando las herramientas de tu lenguaje, que sea
 * capaz de determinar si esa función se ejecuta correctamente.
*/
const suma = (numero, numero2) => {
    return numero + numero2;
}

// pruebas manuales
// console.log(suma(20, 30) === 40);

const assert = (description, result) => {
    if (result) {
        console.log("Ok ", description);
    } else {
        console.log("No ok", description);
    }
}

const test = () => {
    assert("Suma de 3 y 2 es 6", suma(2, 3) === 6);
    assert("Suma de 4 y 5 es 9", suma(4, 5) === 9);
}

// test();

/*
Crea un diccionario con las siguientes claves y valores:
 * "name": "Tu nombre"
 * "age": "Tu edad"
 * "birth_date": "Tu fecha de nacimiento"
 * "programming_languages": ["Listado de lenguajes de programación"]
 * Crea dos test:
 * - Un primero que determine que existen todos los campos.
 * - Un segundo que determine que los datos introducidos son correctos.
*/

// mapas
const doc = new Map();
doc.set(1, "apple");
doc.set(2, "apple2");

for (const [key, value] of doc) {
    //(console.log(key, value);
}
