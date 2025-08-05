/*
 * EJERCICIO:
 * - Muestra ejemplos de creación de todas las estructuras soportadas por defecto
 *   en tu lenguaje.
 * - Utiliza operaciones de inserción, borrado, actualización y ordenación.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una agenda de contactos por terminal.
 * - Debes implementar funcionalidades de búsqueda, inserción, actualización
 *   y eliminación de contactos.
 * - Cada contacto debe tener un nombre y un número de teléfono.
 * - El programa solicita en primer lugar cuál es la operación que se quiere realizar,
 *   y a continuación los datos necesarios para llevarla a cabo.
 * - El programa no puede dejar introducir números de teléfono no numéricos y con más
 *   de 11 dígitos (o el número de dígitos que quieras).
 * - También se debe proponer una operación de finalización del programa.
 */

// arreglo de nombres de usuario
const names = ["Juan", "Pedro", "Paco"];

// metodo map => devuelve un nuevo arreglo sin modifcar el arreglo
const newNames = names.map((name) => {
    return name;
})

//console.log(newNames);

// arreglo de objetos
const users = [
    {
        id: 1,
        name: "Juan",
        lastName: "Pascal"
    },
    {
        id: 2,
        name: "Luis",
        lastName: "Marcial"
    }
]

const lastNames = users.map((lastName) => lastName.lastName);

//console.log(lastNames);

// agenda de contactos
