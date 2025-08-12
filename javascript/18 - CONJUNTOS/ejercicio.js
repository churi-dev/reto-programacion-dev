// Conjuntos
/*
crea un conjunto de datos y realiza las siguientes
 * operaciones (debes utilizar una estructura que las soporte):
 * - Añade un elemento al final.
 * - Añade un elemento al principio.
 * - Añade varios elementos en bloque al final.
 * - Añade varios elementos en bloque en una posición concreta.
 * - Elimina un elemento en una posición concreta.
 * - Actualiza el valor de un elemento en una posición concreta.
 * - Comprueba si un elemento está en un conjunto.
 * - Elimina todo el contenido del conjunto.
*/

// Set : agrega elementos no repetidos
const newSet = new Set();
newSet.add(20);
newSet.add(30);


console.log(newSet);


/*
// Set : agrega elementos no repetidos
const newSet = new Set();

// Add:
newSet.add(10).add(10).add(20);

for (const value of newSet) {
    // console.log(value);
}

// console.log(newSet);

const conjuntoA = new Set([1, 2, 3, 4]);
const conjuntoB = new Set([3, 4, 5, 6]);

// union
const union = new Set([...conjuntoA, ...conjuntoB]);

// interseccion 
const interseccion = new Set([...conjuntoA].filter(x => conjuntoB.has(x)));

// diferencia A \ B
const diferencia = new Set([...conjuntoA].filter(x => !conjuntoB.has(x)));

// diferencia simetrica: todos los valores excluidos de la interseccion
const diferenciaSimetrica = new Set([...union].filter(x => !interseccion.has(x)));

diferencia.forEach((value) => {
    console.log(value);
})

console.log(diferenciaSimetrica);
*/