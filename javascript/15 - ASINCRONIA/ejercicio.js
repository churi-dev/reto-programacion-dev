/*
 * Crea un programa capaz de ejecutar de manera
 * asíncrona una función que tardará en finalizar un número concreto de
 * segundos parametrizables. También debes poder asignarle un nombre.
 * La función imprime su nombre, cuándo empieza, el tiempo que durará
 * su ejecución y cuando finaliza.
*/

const funcionAsyn = async (nombre, tiempo)  => {
    console.log(`La función ${nombre} comienza. Duración esperada ${tiempo} segundos.` ); 
    const inicio = new Date();
    console.log(`Inicio: ${inicio.toLocaleTimeString()}`)

    // nueva promesa
    await new Promise(resolve  => 
        setTimeout(resolve, tiempo * 1000)
    );

    const fin = new Date();
    console.log(`La funcion ${nombre} finalizado.`);
    console.log(`Fin: ${fin.toLocaleTimeString()}`)
}

// funcionAsyn("Funcion 1", 5);
/*
Utilizando el concepto de asincronía y la función anterior, crea
 * el siguiente programa que ejecuta en este orden:
 * - Una función C que dura 3 segundos.
 * - Una función B que dura 2 segundos.
 * - Una función A que dura 1 segundo.
 * - Una función D que dura 1 segundo.
 * - Las funciones C, B y A se ejecutan en paralelo.
 * - La función D comienza su ejecución cuando las 3 anteriores han finalizado.
*/

const funcion1 = async () => {
    console.log("Empezando funcion C");
    await new Promise(resolver => 
        setTimeout(resolver, 3000)
    );
    console.log("Finalizado funcion C")
}

const funcion2 = async () => {
    console.log("Empezando funcion B");
    await new Promise(resolver =>
        setTimeout(resolver, 2000)
    );
    console.log("Finalizando funcion B");
}

const funcion3 = async () => {
    console.log("Empezando funcion A");
    await new Promise(resolver =>
        setTimeout(resolver, 1000)
    );
    console.log("Finalizado funcion A");
}

const funcion4 = async () => {
    console.log("Empezando funcion D");
    await new Promise(resolver =>
        setTimeout(resolver, 1000)
    );
    console.log("Finalizado funcion D");
}

const main = async () => {
    const C = funcion1();
    const B = funcion2();
    const A = funcion3();

    await Promise.all([C, B, A]);

    const D = funcion4();
}

main();