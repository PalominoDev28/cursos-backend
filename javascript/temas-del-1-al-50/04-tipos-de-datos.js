import utils from './00-utilidades.js';
/*
EJERCICIO 1: String and Number Operations
Crear un programa que:
- Tome el nombre de una persona (string) y su edad (number)
- Concatene ambos valores en una oración
- Calcule qué edad tendrá en 10 años
- Muestre ambos resultados en consola
*/
utils.printTitleWithLine('EJERCICIO 1: concatenar String - Int');
var name = "PalominoDev28";
var age = 27;
var message = "Hello, my name is " + name + " and I am " + age + " years old.";
console.log(message);
var futureAge = age + 10;
console.log("In 10 years, I will be " + futureAge + " years old.");


/*
EJERCICIO 2: Type Conversion Challenge
Crear un programa que:
- Comience con un string que contenga un número ("123.45")
- Convierta ese string a número
- Realice operaciones matemáticas (multiplicar por 2 y sumar 10)
- Convierta el resultado de nuevo a string
- Verifique y muestre el tipo de dato de cada variable
*/
utils.printTitleWithLine("EJERCICIO 2: Type Conversion Challenge");
// Convertir string a número y realizar operaciones
var stringNumber = "124.98";
var number = parseFloat(stringNumber);
var result = (number * 2) + 10;
var stringResult = result.toString();
console.log("Original string: " + stringNumber);
console.log("Converted to number: " + number);
console.log("Result after operations: " + result);
console.log("Converted back to string: " + stringResult);
console.log("Type of original string: " + typeof stringNumber);
console.log("Type of converted number: " + typeof number);
console.log("Type of result: " + typeof result);

/*
EJERCICIO 3: Boolean and Coercion Exercise
Crear un programa que:
- Compare diferentes tipos de datos usando == y ===
- Demuestre la coerción de tipos
- Muestre la diferencia entre valores truthy y falsy
- Utilice operadores lógicos (&&, ||, !)

Implementa cada ejercicio debajo de su respectivo comentario.
*/

utils.printTitleWithLine("EJERCICIO 3: Boolean and Coercion Exercise");
// Comparación de tipos de datos
var num1 = 5;
var num2 = "5";
console.log("Comparación con ==: " + (num1 == num2)); // true
console.log("Comparación con ===: " + (num1 === num2)); // false
// Coerción de tipos
var coercedValue = num1 + num2; // Coerción a string
console.log("Coerción de tipos: " + coercedValue); // "55"
// Valores truthy y falsy
var truthyValue = "Hello";
var falsyValue = 0;
console.log("Truthy value: " + Boolean(truthyValue)); // true
console.log("Falsy value: " + Boolean(falsyValue)); // false
// Operadores lógicos
var a = true;
var b = false;
console.log("a && b: " + (a && b)); // false
console.log("a || b: " + (a || b)); // true
console.log("!a: " + (!a)); // false    