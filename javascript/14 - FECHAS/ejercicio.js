/*
    EJERCICIO:
 * Crea dos variables utilizando los objetos fecha (date, o semejante) de tu lenguaje:
 * - Una primera que represente la fecha (día, mes, año, hora, minuto, segundo) actual.
 * - Una segunda que represente tu fecha de nacimiento (te puedes inventar la hora).
 * Calcula cuántos años han transcurrido entre ambas fechas.
*/

let fechaActuaL = new Date();
console.log(fechaActuaL);

let fechaNacimiento = new Date(2003, 6, 7, 7, 1, 3, 4);
console.log(fechaNacimiento);

let aniosTranscurridos = fechaActuaL.getFullYear() - fechaNacimiento.getFullYear();

console.log(`Años transcurridos: ${aniosTranscurridos}`);

/*
* Utilizando la fecha de tu cumpleaños, formatéala y muestra su resultado de
 * 10 maneras diferentes. Por ejemplo:
 * - Día, mes y año.
 * - Hora, minuto y segundo.
 * - Día de año.
 * - Día de la semana.
 * - Nombre del mes.
*/
const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];


function formatDate(date) {
    const dayMonthYear = `${days[date.getDay()]} ${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`;
    const hourMinutSeconds = `Hora: ${date.getHours()} - Minuto: ${date.getMinutes()} - Segundo: ${date.getSeconds()}`;
    const dayYear = `Día del año: ${days[date.getDay()]}`;
    const monthName = `Mes: ${months[date.getMonth()]}`

    return {
        dayMonthYear,
        hourMinutSeconds,
        dayYear,
        monthName
    };
}

const data = formatDate(fechaNacimiento);

for (let index in data) {
    console.log(data[index]);
}