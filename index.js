
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

import readline from "readline";

let read = readline.createInterface({ input: process.stdin, output: process.stdout });

let atras = [];
let adelante = [];

function navegador_web() {
    read.question('Ingrese Url o escribe "adelante", "atras" o "salir": ', (res) => {
        let input = res.trim().toLowerCase();

        switch(input) {
        case 'adelante':
            atras.push(adelante.pop());
            currentPage(atras);
            navegador_web();
            break;
        case 'atras':
            if (isEmpty(atras)) {
                currentPage(atras);
                navegador_web();
            } else {
                adelante.push(atras.pop())
                currentPage(atras);
                navegador_web();
            }
            break;

        case 'salir':
            read.close();
            break;
        default: 
            atras.push(input);
            currentPage(atras);
            navegador_web();
            break;
        }
    });

}

function isEmpty(pila) {
    return pila.length === 0;
}

function currentPage(pila) {
    return isEmpty(pila) ? console.log("Estás en la pagina de inicio") : console.log(`Estas en la web ${pila[pila.length - 1]}`);
}

//navegador_web();

/*
Utilizando la implementación de cola y cadenas de texto, simula el mecanismo de una
 *   impresora compartida que recibe documentos y los imprime cuando así se le indica.
 *   La palabra "imprimir" imprime un elemento de la cola, el resto de palabras se
 *   interpretan como nombres de documentos. 
*/

let documentos = [];
function imprimerDocumentos() {
    read.question('Escribe "imprimr", "salir" o registra el nombre de tu documento: ', (res) => {
        let input = res.trim().toLowerCase();
        if (input.length === 0) {
            console.log("Ingrese valor de formulario.");
            imprimerDocumentos();
        } else {
            switch(input) {
            case 'salir': 
                read.close();
                break;
            case 'imprimir':
                printDoc(documentos);
                imprimerDocumentos();
                break;
            default:
                documentos.push(input);
                console.log(documentos);
                imprimerDocumentos();
                break;
            }
        }
        
        
    });
}

function docIsEmpty(cola) {
    return cola.length === 0;
}

function printDoc(cola) {
    return docIsEmpty(cola) ? console.log("No hay doc para imprimir") : console.log(`Imprimiendo doc: ${cola.shift()}`);
}

imprimerDocumentos()