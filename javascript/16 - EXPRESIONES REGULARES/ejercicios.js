const regex = /\-?\d+/;
const str = 'precio: -18';
//console.log(str.match(regex));

/*
 * Crea 3 expresiones regulares (a tu criterio) capaces de:
 * - Validar un email.
 * - Validar un número de teléfono.
 * - Validar una url.
*/

const emailRegex = /\S+@\S+\.\S+/;

const verificarEmail = (email) => {
    let isTrue = emailRegex.test(email);
    if (isTrue) {
        console.log(`El correo ${email} es correcto`);
    } else {
        console.log(`El correo ${email} es inválido`);
    }
}

verificarEmail("churi@gmail.com");
