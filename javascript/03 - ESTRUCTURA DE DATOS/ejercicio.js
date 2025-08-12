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

/*import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({
    input,
    output
});

// arreglo de objetos de contacto
const contacts = [
    {
        id: 1,
        name: "Jhon Churivanti",
        telephone: 913740129
    },
    {
        id: 2,
        name: "Juan",
        telephone: 913740129
    }
]

const listContacts = (arr) => {
    console.log(
        `
        LIST CONTACT
        `
    );
    if (arr.length === 0) {
        console.log("No hay contactos.");
        return;
    }

    arr.forEach((contact) =>
    console.log(
        `
        Nombre: ${contact.name} Telefono: ${contact.telephone}`)
    );
    isExist();
}


const isExist = async (option) => {
    const res = await rl.question(
            `
            1: Volver y reintar
            2: Volver a menu
            3: Lista de contacto
            0: Salir
            
            Seleccione: 
            `
    );

    if (Number(res) === 1) return option();
    if (Number(res) === 2) return menuOpciones();
    if (Number(res) === 3) return listContacts(contacts);

    rl.close();
}


const agregarContacto = async ()  => {
    console.log(
        `---- FORMULARIO DE REGISTRO ----`
    );
    const name = await rl.question("Nombre: ");
    const phone = await rl.question("Número: ")

    const validName = /\d/.test(name);
    const validPhone = /[a-zA-Z]/g.test(phone);

    if (name === "" || validName) {
        console.log("El valor no es válido, solo letras.");
        return isExist(agregarContacto);
    }

    if (phone === "" || validPhone || phone.length > 9) {
        console.log("Número inválido, debe tener 9 dígitos.");
        return isExist(agregarContacto);
    }

    // incializa un nuevo contacto con los nuevos valores
    const newContact = {
        id: contacts.length + 1,
        name: name,
        telephone: Number(phone)
    }

    contacts.push(newContact);
    console.log(
        `
        El contacto con nombre ${newContact.name} agregado correctamente.
        `
    );
    isExist(agregarContacto);

}

const buscarContacto = async () => {
    const valor = await rl.question(
        `
        Ingrese su nombre: 
        `
    );
    const isFind = contacts.filter((value) => {
        return value.name.toLowerCase() === valor.toLowerCase();
    });
    
    if (isFind.length === 0) {
        console.log(
            `
            Contact not found
            `
        );
        return isExist(buscarContacto);
    }

    listContacts(isFind);
    isExist(buscarContacto);
}

async function menuOpciones() {
    const option = await rl.question(
        `- AGENDA
        1: Agregar contacto
        2: Buscar contacto
        3: Actualizar contacto
        4: Eliminar contacto
        5: Listar contactos

        0: Salir

        Ingresa su opcion: 
        `
    );
    switch(Number(option)) {
        case 0:
            console.log("Saliendo...");
            rl.close();
            break;
        case 1:
            await agregarContacto();
            break;
        case 2:
            await buscarContacto();
            break;
        case 3:
            console.log("Hola actualizar");
            break;
        case 4:
            console.log("Hola eliminar");
            break;
        case 5:
            listContacts(contacts);
            break;
        default:
            console.log("Opcion no encontrada");
            break;        
    }
}
*/