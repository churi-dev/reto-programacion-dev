/** EJERCICIO:
 * Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
 * - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
 *   - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
 *   - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
 *   - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
 *   - La función retorna el número de veces que se ha impreso el número en lugar de los textos. 
 * */

function numberMultiples(text1, text2) {
    let count = 0;
    for (let index = 1; index <= 100; index++) {
        if (index % 3 == 0 && index % 5 == 0 ) {
            console.log(`${text1} ${text2}`);
        } else if (index % 3 == 0) {
            console.log(text1);
        } else if (index % 5 == 0) {
            console.log(text2);
        } else {
            console.log(index);
            count++;
        }
    }

    return count;
}

let counts = numberMultiples("churi", "dev");
console.log(counts);


