function division(numero, numero2) {
    if (numero2 === 0) {
        throw new Error("No se puede dividir entre 0");
    } 
    return numero / numero2;   
}

function menuCalculo() {
    try {
        let res = division(20, 2);
        console.log(`Resultado: ${res}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    } 
}

menuCalculo();
