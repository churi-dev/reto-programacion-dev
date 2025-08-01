/*
* EJERCICIO:
* Crea un programa que imprima por consola todos los números comprendidos
* entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3
*/

function numberMultiples() {
    let initial = 10;
    let final = 55;

    for (let index = initial; index <= final; index++) {
        // comprueba si no no son multiplos de 3, si son valos pares y excluye el 16
        if ((!index % 3 == 0) && index % 2 == 0 && index != 16) {
            console.log(index); 
        }
    }
}

numberMultiples();




