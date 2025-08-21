import utils from "./00-utilidades.js";
// Ejercicio 1: Calificación de notas
// Crear variable nota
// Usar if-else if para determinar la calificación (A, B, C, D, F)
utils.printTitleWithLine("Ejercicio 1: Calificación de notas");
let nota = Math.floor(Math.random() * 101); // Genera una nota aleatoria entre 0 y 100
let calificacion;
if (nota >= 90) {
  calificacion = "A";
} else if (nota >= 80) {
  calificacion = "B";
} else if (nota >= 70) {
  calificacion = "C";
} else if (nota >= 60) {
  calificacion = "D";
} else {
  calificacion = "F";
}
console.log(`Nota: ${nota} - Calificación: ${calificacion}`);

// Ejercicio 2: Verificación de edad y categoría
// Crear variable edad
// Usar if-else para categorizar en: niño, adolescente, adulto, adulto mayor
utils.printTitleWithLine("Ejercicio 2: Verificación de edad y categoría");
let edad = Math.floor(Math.random() * 100); // Genera una edad aleatoria
let categoria;
if (edad < 13) {
  categoria = "Niño";
} else if (edad < 18) {
  categoria = "Adolescente";
} else if (edad < 65) {
  categoria = "Adulto";
} else {
  categoria = "Adulto Mayor";
}
console.log(`Edad: ${edad} - Categoría: ${categoria}`);

// Ejercicio 3: Verificación de contraseña
// Crear variable password
// Usar if con múltiples condiciones para verificar requisitos de contraseña
// (longitud mínima, mayúsculas, números, caracteres especiales)
utils.printTitleWithLine("Ejercicio 3: Verificación de contraseña");
let password = utils.generateRandomPassword();
let isValid = false;
if (password.length >= utils.generateRandomNumber(7,10) && password.match(/[A-Z]/) && password.match(/[0-9]/) && password.match(/[\W_]/)) {
  isValid = true;
}
console.log(`Contraseña: ${password} - Válida: ${isValid}`);