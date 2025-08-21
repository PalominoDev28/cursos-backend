// Imprimir titulo del ejercicio
function printTitleWithLine(title) {
    var line = "-".repeat(title.length);
    console.log(line);
    console.log(title);
    console.log(line);
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomPassword() {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*';
    let maxLength = generateRandomNumber(1,12);
    // Garantiza al menos uno de cada tipo
    let password = 
        uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length)) +
        lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length)) +
        numbers.charAt(Math.floor(Math.random() * numbers.length)) +
        specialChars.charAt(Math.floor(Math.random() * specialChars.length));
    
    // Agrega caracteres aleatorios hasta llegar a 8
    const allChars = uppercaseChars + lowercaseChars + numbers + specialChars;
    for(let i = password.length; i < 8; i++) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    
    // Mezcla los caracteres
    return password.split('').sort(() => Math.random() - 0.5).join('');
}

export default {
    printTitleWithLine, generateRandomNumber, generateRandomPassword
};
