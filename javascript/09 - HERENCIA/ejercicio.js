// HERENCIA: 
class Animal {
    constructor(name) {
        this.name = name;
    }

    sonido() {
        return `El ${this.name} realiza un sonido.`;
    }
}

class Perro extends Animal {
    constructor(name) {
        super(name);
    }

    sonido() {
        return `El ${this.name} hace: Gua Gua`;
    }
}

class Gato extends Animal {
    constructor(name) {
        super(name);
    }

    sonido() {
        return `El ${this.name} hace: Miau Miau.`;
    }
}

function mostrarSonido(animal) {
    return animal.sonido();
}

// POLIMORFISMO: 
const perro = new Perro("Tarzan");
const gato = new Gato("Minino");

// console.log(mostrarSonido(perro));
// console.log(mostrarSonido(gato));

/*
Implementa la jerarquía de una empresa de desarrollo formada por Empleados que
 * pueden ser Gerentes, Gerentes de Proyectos o Programadores.
 * Cada empleado tiene un identificador y un nombre.
 * Dependiendo de su labor, tienen propiedades y funciones exclusivas de su
 * actividad, y almacenan los empleados a su cargo.
*/

// empleado
class Empleado {
    constructor(uuid, nombre) {
        this.uuid = uuid;
        this.nombre = nombre;
    }

    infoEmpleado() {
        return `Hola, soy ${this.nombre}`;
    }
}
// gerente
class Gerente extends Empleado {
    constructor(uuid, nombre) {
        super(uuid, nombre);
        this.clientes = [];
    }

    get mostrarCliente() {
        return this.listarCliente();
    }

    listarCliente() {
        return this.clientes;
    }

    addCliente(cliente) {
        return this.clientes.push(cliente);
    }
}

const gerente1 = new Gerente("1234", "Juan Pablo");

console.log(gerente1.infoEmpleado());
gerente1.addCliente("Company 1");
gerente1.addCliente("Company 2");
console.log(gerente1.mostrarCliente);



