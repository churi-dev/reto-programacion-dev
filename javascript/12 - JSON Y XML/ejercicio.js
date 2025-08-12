// JSON:

// 1. crear objeto 
const persona = {
    name: "JHon",
    lastName: "Churivanti",
    age: 20
}

//console.log(typeof persona);

let texto = '{"name":"John", "age":30, "city":"New York"}';

console.log(typeof texto);

// usar la funcion de javascript parse para convertir de un texto a objeto.
const objecto1 = JSON.parse(texto);
console.log(typeof objecto1);
console.log(objecto1);


const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj = JSON.parse(text);
//console.log(obj);
obj.birth = new Date(obj.birth);
//console.log(obj.birth);

// 2. usar la funcion de stringify para convertir de json a texto (string);
const cadenaTexto = JSON.stringify(obj);
//console.log(typeof cadenaTexto); 

const arr = ["John", "Peter", "Sally", "Jane"];
const myJSON = JSON.stringify(arr);
//console.log(typeof myJSON);

// almacenar valor a local storage
localStorage.setItem("txt1", cadenaTexto);

// recoger y mostrar data.
let reviewText = localStorage.getItem("txt1");
//console.log(reviewText);

const newJson = JSON.parse(reviewText);
//console.log(newJson);

/*
// XML:
const stringXml = `
<persona>
    <nombre>Jhon</nombre>
    <edad>22</edad>
</persona>`;

const parser = new DOMParser();

// 1. convertir de textoXml a documentoXlm
const xmlDoc = parser.parseFromString(stringXml, "application/xml");
//console.log(xmlDoc);


// 2. Leer datos del xml
const nombre = xmlDoc.getElementsByTagName("nombre")[0].textContent;
const edad = xmlDoc.getElementsByTagName("edad")[0].textContent;

// console.log(nombre);
// console.log(edad);


* Desarrolla un programa capaz de crear un archivo XML y JSON que guarde los
 * siguientes datos (haciendo uso de la sintaxis correcta en cada caso):
 * - Nombre
 * - Edad
 * - Fecha de nacimiento
 * - Listado de lenguajes de programación
 * Muestra el contenido de los archivos.
 * Borra los archivos.
*/


import fs from "fs";
import xml2js from "xml2js";

const datos = {
    nombre: "Jhon Churivanti",
    edad: 20,
    fecha_nacimiento: "07-07-2003",
    lenguajes: ["Java", "Javascript", "C#"]
}

const crearJson = () => {
    fs.writeFileSync('datos.json', JSON.stringify(datos, null, 2), 'utf-8');
    console.log("Archivo creado.\n", fs.readFileSync('datos.json', 'utf-8'));
}

const crearXml = () => {
    const builder = new xml2js.Builder({ headless: true, rootName: 'person' });
    const xml = builder.buildObject({
        nombre: datos.nombre,
        edad: datos.edad,
        fecha_nacimiento: datos.fecha_nacimiento,
        lenguajes: { lenguaje: datos.lenguajes }
    });
    fs.writeFileSync('datos.xml', xml, 'utf-8');
    console.log("Archivo xml creado:\n", fs.readFileSync('datos.xml', 'utf-8'));
}

//crearJson();
//crearXml();

/*
Utilizando la lógica de creación de los archivos anteriores, crea un
 * programa capaz de leer y transformar en una misma clase custom de tu 
 * lenguaje los datos almacenados en el XML y el JSON.
 * Borra los archivos.
*/

class Persona {
    constructor(nombre, edad, fecha_nacimiento, lenguajes) {
        this.nombre = nombre;
        this.edad = edad;
        this.fecha_nacimiento = fecha_nacimiento;
        this.lenguajes = lenguajes;
    }

    inforPersona() {
        console.log(
            `
            INFORMACIÓN:
            NOMBRE: ${this.nombre}
            EDAD: ${this.edad}
            FECHA NACIMIENTO: ${this.fecha_nacimiento}
            LENGUAJES: ${this.lenguajes.join(", ")}
            `
        );
    }
}

const leerYTransformarJson = () => {
    // leer dato json
    const dataJson = fs.readFileSync('datos.json', 'utf-8');

    // convertir a objeto para leer y utilizar dato
    const datoObject = JSON.parse(dataJson);

    // serializar para crear objeto con dato json
    const personaJson = new Persona(
        datoObject.nombre,
        datoObject.edad,
        datoObject.fecha_nacimiento,
        datoObject.lenguajes
    );
    personaJson.inforPersona();
}

const leeryTransformarXml = () => {
    const data = fs.readFileSync('datos.xml', 'utf-8');

    // parse / convierte de string  a objecto
    xml2js.parseString(data, (err, result) => {
        if (err) throw err;
        const datosXml = result.person;
        const personaXlm = new Persona(
            datosXml.nombre[0],
            datosXml.edad[0],
            datosXml.fecha_nacimiento[0],
            datosXml.lenguajes[0].lenguaje
        );
        personaXlm.inforPersona();
    });
}

const borrarArchivos = () => {
    fs.unlinkSync("datos.json");
    fs.unlinkSync("datos.xml");
    console.log("Archivos borrados.");
}

// leeryTransformarXml();
// leerYTransformarJson();
borrarArchivos();
