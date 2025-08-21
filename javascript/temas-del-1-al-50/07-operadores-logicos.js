import utils from "./00-utilidades.js";

// Ejercicio 1: Verificación de edad y permiso
// Crear variables edad y tienePermiso
// Usar && para verificar si la persona es mayor de 18 y tiene permiso

utils.printTitleWithLine("EJERCICIO 1: Verificación de edad y permiso");
var age =  Math.floor(Math.random() * 100); // Edad aleatoria entre 0 y 99
var agree = Math.random() < 0.5; // Verdadero o falso aleatorio
console.log("Edad: " + age + ", Tiene permiso: " + agree + ".\n");
if (age >= 18 && agree) {
    console.log("Puede entrar al evento." + "\n");
}
else {
    console.log("No puede entrar al evento." + "\n");
}

// Ejercicio 2: Control de acceso a una fiesta
// Crear variables esInvitado y traeRegalo
// Usar || para permitir entrada si es invitado o trae regalo

utils.printTitleWithLine("Ejercicio 2: Control de acceso a una fiesta");
var esInvitado = Math.random() < 0.5; 
var traeRegalo = Math.random() < 0.5; 
console.log("Es invitado: " + esInvitado + ", Trae regalo: " + traeRegalo + ".\n");
if(esInvitado || traeRegalo) {
    console.log("Puede entrar a la fiesta." + "\n");
}else {
    console.log("No puede entrar a la fiesta." + "\n");
}

// Ejercicio 3: Verificación de disponibilidad
// Crear variables esDiaLaboral, tieneVacaciones y esFeriado
// Usar combinación de && y || para determinar si la persona está disponible

utils.printTitleWithLine("Ejercicio 3: Verificación de disponibilidad de trabajo");
var dia = Math.floor(Math.random() * 7); // Día aleatorio de la semana (0-6)
var esDiaLaboral = dia < 5;
var tieneVacaciones = Math.random() < 0.5;
var esFeriado = Math.random() < 0.5;
console.log("Día: " + dia + ", Es día laboral: " + esDiaLaboral + 
", Tiene vacaciones: " + tieneVacaciones + ", Es feriado: " + esFeriado + ".\n");
var message = "La persona está disponible para laborar: ";
if((esDiaLaboral && (tieneVacaciones || esFeriado))) {
    message += "No";
}else {
    message += "Sí";    
}
console.log(message+ "\n");

// Ejercicio 4: Sistema de descuentos
// Crear variables esMiembro, esEstudiante y esJubilado
// Usar operadores lógicos para determinar si aplica descuento
utils.printTitleWithLine("Ejercicio 4: Sistema de descuentos");
var esMiembro = Math.random() < 0.5; // Miembro del club
var esEstudiante = Math.random() < 0.5; // Estudiante
var esJubilado = Math.random() < 0.5; // Jubilado
console.log("Es miembro: " + esMiembro + ", Es estudiante: " + esEstudiante + 
", Es jubilado: " + esJubilado + ".\n");
if(esMiembro || esEstudiante || esJubilado) {
    console.log("Aplica descuento." + "\n");
} else {
    console.log("No aplica descuento." + "\n");
}

// Ejercicio 5: Validación de formulario
// Crear variables nombreCompleto, email y aceptaTerminos
// Usar ! y && para validar que ningún campo esté vacío y términos aceptados
utils.printTitleWithLine("Ejercicio 5: Validación de formulario");
var nombreCompleto = "Palomino Dev"; 
var email = "correo@correo.com.co";
var aceptaTerminos = Math.random() < 0.5; // Acepta términos aleatorio
console.log("Nombre completo: " + nombreCompleto + ", Email: " + email + 
", Acepta términos: " + aceptaTerminos + ".\n");
if(nombreCompleto && email && aceptaTerminos) {
    console.log("Formulario válido." + "\n");
}else {
    console.log("Formulario inválido." + "\n");
}