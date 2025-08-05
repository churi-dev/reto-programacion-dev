// 1, Pilas: estructura de datos que sigue una el sigue el principio de LIFO (last In, Last Out), es decir, el último elemento en entrar es el primero en salir
class Stack {
    constructor() {
        this.items = []; 
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) return "La pila esta vacía";
        return this.items.pop();
    }

    // para consultar el ultimo valor
    peek() {
        if (this.isEmpty()) return "La pila está vacía";
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    print() {
        console.log(this.items.join(" <- "));
    }
}

const pila = new Stack();
pila.push("Book 1");
pila.push("Book 2");
pila.push("Book 3");


// mostrar
pila.print();

// eliminar el ultimo
console.log(`Elemento eliminado: ${pila.pop()}`)
pila.print();

// consultar el ultimo elemento
console.log(`Elemento ultimo: ${pila.peek()}`);


// 2. Colas: estructura de datps, que sigue el principio FIFO (First In, First Out), primero en entrar es el primero en salir.

class Queue {
    constructor() {
        this.items = [];
    }

    enQue(elemento) {
        this.items.push(elemento);
    }

    deQue() {
        if(this.isEmpty()) return "La cola está vacía";
        return  this.items.shift();
    }

    front() {
        if(this.isEmpty()) return "La cola está vacía";
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    print() {
        console.log(this.items.join(" <- "));
    }
}

const cola = new Queue();

cola.enQue("Persona1");
cola.enQue("Persona2");
cola.enQue("Persona3");
cola.print();

// desencolar
console.log(`Atendido: ${cola.deQue()}`);

// Primer valor
console.log(`Siguiente: ${cola.front()}`);

/*
Utilizando la implementación de pila y cadenas de texto, simula el mecanismo adelante/atrás
 *   de un navegador web. Crea un programa en el que puedas navegar a una página o indicarle
 *   que te quieres desplazar adelante o atrás, mostrando en cada caso el nombre de la web.
 *   Las palabras "adelante", "atrás" desencadenan esta acción, el resto se interpreta como
 *   el nombre de una nueva web.
*/

