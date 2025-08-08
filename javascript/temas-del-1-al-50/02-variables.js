/* 
Tipos de datos:
- String: se utiliza para representar texto.
- Number: se utiliza para representar números.
- Boolean: se utiliza para representar valores lógicos (true o false).
- Array: se utiliza para representar listas de datos.
- Object: se utiliza para representar objetos.
- Function: se utiliza para representar funciones.
- undefined: se utiliza para representar valores indefinidos.
- null: se utiliza para representar valores nulos.

Notas:
- Las variables se declaran con var, let o const.
- Las variable se declaran con un nombre que sea significativo.
- Las variables se declaran en Js con un nombre que sea camelCase.

*/
var miVariable = "PalominoDev"; // String
var miNumero = 10; // Number
var miBooleano = true; // Boolean
var miArray = [1, 2, 3, 4, 5]; // Array
var miObjeto = { nombre: "Palomino", edad: 20 }; // Object
var miFuncion = function () {}; // Function

// console.log(miVariable);
// console.log(miNumero);
// console.log(miBooleano);
// console.log(miArray);
// console.log(miObjeto);
// console.log(miFuncion);


/*
Ejercicios de Variables:

1. Crea variables para almacenar información de un producto:
   - Nombre del producto
   - Precio
   - Disponibilidad (boolean)
   - Categorías (array)
   - Detalles (objeto con características)
   Luego muestra toda la información en consola.
*/

var productData = {
    nombre: "Laptop",
    precio: 1200,
    disponible: true,
    categorias: ["Electrónica", "Computación"],
    detalles: {
        marca: "MarcaX",
        procesador: "Intel i7",
        ram: "16GB",
        almacenamiento: "512GB SSD"
    }   
}

for(let detail in productData){
    console.log(`${detail}: ${productData[detail]}`);
}

/*
2. Crea variables para un sistema de registro de estudiante:
   - Nombre completo
   - Edad
   - Lista de calificaciones (array)
   - Está matriculado (boolean)
   - Información de contacto (objeto)
   Muestra la información y calcula el promedio de calificaciones.
*/
var studentName = "Juan Pérez";
var studentAge = 21;
var studentGrades = [85, 90, 78, 92];
var isEnrolled = true;
var contactInfo = {
    email: "student@email.com",
    telefono: "123-456-7890"
};
console.log(`Información del estudiante:`);
console.log(`Nombre: ${studentName}`);
console.log(`Edad: ${studentAge}`);
console.log(`Matriculado: ${isEnrolled}`);
console.log(`Información de contacto: ${contactInfo.email}, ${contactInfo.telefono}`);  
console.log(`Calificaciones: ${studentGrades.join(", ")}`);
var totalNotes = studentGrades.reduce((previous, actual) => previous + actual, 0);
let averageGrade = totalNotes / studentGrades.length;
console.log(`Promedio de calificaciones: ${averageGrade.toFixed(2)}`);
/*
3. Crea variables para un sistema de reservas:
   - Nombre del cliente
   - Número de personas
   - Fecha (puedes usar un string)
   - Servicios adicionales (array)
   - Está confirmada (boolean)
   - Detalles de la reserva (objeto)
   Muestra un resumen de la reserva en consola.
*/
var reservation = {
    cliente: "Ana Gómez",
    numeroPersonas: 4,
    fecha: "2023-10-15",
    serviciosAdicionales: ["Transporte", "Decoración"],
    confirmada: false,
    detalles: {
        hora: "18:00",
        lugar: "Restaurante XYZ",
        comentarios: "Mesa cerca de la ventana"
    }
};
console.log(`Resumen de la reserva:`);
console.log(`Cliente: ${reservation.cliente}`);
console.log(`Número de personas: ${reservation.numeroPersonas}`);
console.log(`Fecha: ${reservation.fecha}`);
console.log(`Servicios adicionales: ${reservation.serviciosAdicionales.join(", ")}`);
console.log(`Confirmada: ${reservation.confirmada}`);
console.log(`Detalles: Hora - ${reservation.detalles.hora}, Lugar - ${reservation.detalles.lugar}, Comentarios - ${reservation.detalles.comentarios}`);