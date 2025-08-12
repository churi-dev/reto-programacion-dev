// File: 
const fileName = "churi-dev.txt";
const content = "churi-dev\n22\nJava";


fs.writeFile(fileName, content, (error) => {
    if (error) {
        console.error(`Error al crear archivo: ${error}`);
    }
    console.log(`Archivo: ${fileName} ha sido creado.`);

    // leer archivo txt
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.log("Error al leer archivo: ", err);
        }
        console.log(`Contenido: ${fileName}:  \n${data}`);
    });

    // borrar archivo
    fs.unlink(fileName, (err) => {
        if (err) {
            console.log("No se pudo borrar: ", err);
            return;
        }
        console.log(`Archivo: ${fileName} ha sido eliminado.`);
    });
})

/*
Desarrolla un programa de gestión de ventas que almacena sus datos en un 
 * archivo .txt.
 * - Cada producto se guarda en una línea del archivo de la siguiente manera:
 *   [nombre_producto], [cantidad_vendida], [precio].
 * - Siguiendo ese formato, y mediante terminal, debe permitir añadir, consultar,
 *   actualizar, eliminar productos y salir.
 * - También debe poseer opciones para calcular la venta total y por producto.
 * - La opción salir borra el .txt.
*/

import readline from "readline/promises";
import fs from "fs/promises";

let read = readline.createInterface({ input: process.stdin, output: process.stdout });


const FILE_NAME = "Producto.txt";

function menu() {
    console.log(
        `
        - PRODUCTO
        1. Agregar
        2. Listar
        3. Calcular
        4. Actualizar
        5. Eliminar
        6. Salir 

        Selecciona opción: 
        `
    );
}

const agregarProducto = async () => {
    const nombreProducto = await read.question("Nombre: ");
    const cantidadVendida = await read.question("Cantidad vendida: ");
    const precio = await read.question("Precio: ");

    const contentFile = `${nombreProducto}, ${cantidadVendida}, ${precio}\n`;

    fs.appendFile(FILE_NAME, contentFile, (error) => {
        if (error) {
            console.log("Error al crear archivo: ", error);
        }
    });
    console.log(`Producto agregado.`);
    isExist(agregarProducto);
}

const mostrarDatos = async () => {
    try {
        const data = await fs.readFile(FILE_NAME, 'utf8');
        console.log(
            `
            Productos:
            ${data}
            `
        );
        isExist();
    } catch(err) {
        console.log("Error: ", err);
    }
}

const eliminarArchivo = async () => {
    try {
        await fs.unlink(FILE_NAME);
        console.log(`Archivo ${FILE_NAME} eliminado: `);
        isExist();
    } catch (err) {
        if (err.code === "ENOENT") {
            console.log("No encontrado: " + FILE_NAME);
        } else {
            console.log("Error al eliminar: " + err);
        }
        isExist();
    }
}


const isExist = async (option) => {
    const res = await read.question(
        `
        1. Volver y reintar
        2. Volver a menu
        3. Listar producto
        0. Salir

        Selecciona opción: 
        `
    );

    if (res === "1") return option();
    if (res === "2") return menuProducto();
    if (res === "3") return await mostrarDatos();

    read.close();
}


async function menuProducto() {
    const res = await read.question(menu()) 
    const input = res.trim().toLowerCase();
        
    switch(input) {
        case "1":
            await agregarProducto();
            break;
        case "2":
            await mostrarDatos();
            break;
        case "3": console.log("Calcular");
            break;
        case "4": console.log("Actualizar");
            break;
        case "5":
            await eliminarArchivo();
            break;
        case "6": console.log("Cerrando gestor de inventario...");
            read.close();
            break;
        default: console.log("Opción no encontrada.")
            break;
        }
    ;
}

menuProducto();
