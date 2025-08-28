import utils from "./00-utilidades.js";

/**
 * Ejercicios de Condicional Switch
 * 
 * 1. Crea un switch que reciba un número del 1 al 7 y devuelva el día de la 
 *    semana correspondiente (1 = Lunes, 2 = Martes, etc.)
 */
function obtenerDiaSemana(numero) {
    switch (numero){
        case 1:
            return "Lunes";
        case 2:
            return "Martes";
        case 3:
            return "Miércoles";
        case 4:
            return "Jueves";
        case 5:
            return "Viernes";
        case 6:
            return "Sábado";
        case 7:
            return "Domingo";
        default:
            return "Número inválido. Por favor ingresa un número del 1 al 7.";
    }
}

/**
 * 2. Crea un switch que reciba el nombre de un mes y devuelva la estación 
 *    del año (para el hemisferio norte)
 *    Ejemplo: "enero" → "invierno"
 */
function obtenerEstacion(mes) {
    switch(mes.toLowerCase()){
        case "enero":
            return "verano";
        case "febrero":
            return "otoño";
        case "marzo":
            return "primavera";
        case "abril":
            return "invierno";
        case "mayo":
            return "primavera";
        case "junio":
            return "invierno";
        case "julio":
            return "verano";
        case "agosto":
            return "verano";
        case "septiembre":
            return "otoño";
        case "octubre":
            return "primavera";
        case "noviembre":
            return "otoño";
        case "diciembre":
            return "verano";
        default:
            return "Mes inválido. Por favor ingresa un nombre de mes válido.";
    }
}

/**
 * 3. Crea un switch que simule una calculadora básica
 *    Debe recibir dos números y un operador (+, -, *, /) y realizar la operación correspondiente
 */
function calculadoraBasica(num1, num2, operador) {
    switch(operador){
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Error: División por cero no es permitida.";
            }
        default:
            return "Operador inválido. Por favor usa +, -, *, o /.";

    }
}

// Prueba tus funciones aquí
utils.printTitleWithLine("Ejercicio 1: Día de la Semana");
console.log(obtenerDiaSemana(1));
utils.printTitleWithLine("Ejercicio 2: Estación del Año");
console.log(obtenerEstacion("enero"));
utils.printTitleWithLine("Ejercicio 3: Calculadora Básica");
console.log(calculadoraBasica(10, 5, "+"));