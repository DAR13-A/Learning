const targetNumber = 27; 
let power = 0;
let result = 1;

while (result < targetNumber) {
    result *= 3;
    power++;
}

if (result === targetNumber) {
    console.log(`${targetNumber} можна отримати шляхом зведення 3 у ступінь ${power}.`);
} else {
    console.log(`${targetNumber} не можна отримати шляхом зведення 3 у ступінь.`);
}
