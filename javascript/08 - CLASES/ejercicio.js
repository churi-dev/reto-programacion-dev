// clase: viene a ser un modelo o moldo que a traves de ella podemos crear varios objetos

// Ejemplo  clase Persona
class Persona {
    constructor(name, lastName, status, age) {
        this.name = name;
        this.lastName = lastName;
        this.status = status;
        this.age = age;
    }

    updateAge(edad) {
        return this.age = edad;
    }

    print() {
        console.log(
            `
            ******* INFO
            Nombre: ${this.name}
            Apellido: ${this.lastName}
            Estado: ${this.status}
            Edad: ${this.age}
            `
        );
    }
}

// usando atributos
let persona1 = new Persona("Jhon", "Churivanti", "Soltero", 22);
//persona1.updateAge(20);
//persona1.print();
let persona2 = new Persona("Jhon", "Churivanti", "Soltero", 22);
//persona2.print();

// clase Pila
class Pila {
    constructor(data) {
        this.data = data;
    }

    insert(data) {
        return this.data.push(data);
    }

    pop() {
        return this.data.pop();
    }

    lengthData() {
        if (this.isEmpty()) return console.log("No hay data.");
        console.log(`Longitud: ${this.data.length} `)
    }

    isEmpty() {
        return this.data.length === 0;
    }

    print() {
        if (this.isEmpty()) return console.log("La cola está vacía");
        console.log(`${this.data.join(" <- ")}`);
    }
}

/*
let pilas = new Pila([]);
pilas.insert("Product 1");
pilas.insert("Product 2");
pilas.print();
pilas.lengthData();
pilas.pop();
pilas.print();

*/

// cola 
class Cola {
    constructor(data) {
        this.data = data;
    }

    enQue(data) {
        return this.data.push(data);
    }

    deQue() {
        return this.data.shift();
    }

    isEmpty() {
        return this.data.length === 0;
    }

    print() {
        if (this.isEmpty()) return "La cola esta vacía";
        return this.data.join(" <- ");
    }
}

const colas = new Cola([]);
colas.enQue("Doc 1");
colas.enQue("Doc 2");
colas.enQue("Doc 3");
console.log(colas.print());
colas.deQue();
console.log(colas.print());