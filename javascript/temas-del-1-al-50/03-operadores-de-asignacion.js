/* 
Operadores de Asignación en JavaScript

Los operadores de asignación se utilizan para asignar valores a las variables.

Operadores principales:
=    : Asignación simple
+=   : Suma y asignación
-=   : Resta y asignación
*=   : Multiplicación y asignación
/=   : División y asignación
%=   : Módulo y asignación
**=  : Exponenciación y asignación
*/

function printTittleWhithLine(title) {
    var line = "-".repeat(title.length);
    console.log(line);
    console.log(title);
    console.log(line);
}


//Ejercicios propuestos:

//1. Crear una variable contador e incrementarla usando +=  Luego decrementarla usando -=
printTittleWhithLine("Punto 1:");
var contador = 0; // Inicializar contador
console.log(`Contador inicial: ${contador}`);
contador += 5; // Incrementar en 5
console.log(`Contador después de += 5: ${contador}`);
contador -= 2; // Decrementar en 2
console.log(`Contador después de -= 2: ${contador}\n`);

//2. Crear una variable precio y aplicar un descuento usando *=   Ejemplo: precio *= 0.9 (aplica 10% de descuento)
printTittleWhithLine("Punto 2:");
var price = Math.random() * 1000;
console.log(`Precio inicial: $${price.toFixed(2)}`);
discount = (Math.random() * 0.5).toFixed(2); // Descuento aleatorio entre 0 y 50%
price *= discount; 
console.log(`Precio después del descuento (${discount*100}%): $${price.toFixed(2)}\n`);

//3. Crear una variable número y duplicar su valor usando *=    Luego elevar al cuadrado usando **=
printTittleWhithLine("Punto 3:");
var number = (Math.random() * 100).toFixed(1); // Número aleatorio entre 0 y 100
console.log(`Número inicial: ${number}`);
number *= 2; // Duplicar el valor
console.log(`Número después de *= 2: ${number}`);
number **= 2; // Elevar al cuadrado
console.log(`Número después de **= 2: ${number}\n`);

//4. Crear una variable total y sumarle el impuesto usando +=   Luego dividir en cuotas usando /=
printTittleWhithLine("Punto 4:");
var total = Math.random() * 10000; 
let tax = Math.random() * 0.2; 
console.log(`Total inicial: $${total.toFixed(2)}`);
total += total * tax; // Calculamos el impuesto 
console.log(`Total después de impuesto (${(tax*100).toFixed(2)}%): $${total.toFixed(2)}`);
var cuotas = 12.0;
total /= cuotas;
console.log(`Total por cuota después de /= ${cuotas}: $${total.toFixed(2)}\n`);

printTittleWhithLine("Fin de los ejercicios de operadores de asignacion. :D");