// Recursividad: Es una funcion que se llama a si misma

function contarRegresivamente(numero) {
    if (numero === 0) {
        console.log("!Llegando a fin!");
        return;
    }
    console.log(numero);
    contarRegresivamente(numero - 1);
}

// contarRegresivamente(5);

function factorialNumero(numero) {
    if (numero === 0) {
        return 1;
    }
    return numero * factorialNumero(numero - 1);
}

let numero = 5;
//console.log(`Factorial de ${numero}: ${factorialNumero(numero)}`);

// suma de un arreglo
function sumaArreglo(arreglo) {
    if (arreglo.length === 0) {
        return 0;
    }
    // console.log(arreglo.slice(1));
    // console.log(arreglo[0]);

    return arreglo[0] + sumaArreglo(arreglo.slice(1));
}

let arr = [10, 20, 30];

//console.log(sumaArreglo(arr));

// serie de fibonacci
function fibonacci(numero) {
    if (numero === 0) return 0;
    if (numero === 1) return 1;

    return fibonacci(numero - 1) + fibonacci(numero - 2);
}

console.log(fibonacci(5));