let operation = prompt("Що ви хочете зробити? (+, -, *, /)");

let firstNumber = parseFloat(prompt("Введіть перше число:"));
let secondNumber = parseFloat(prompt("Введіть друге число:"));

let result;

if (operation === "+") {
  result = firstNumber + secondNumber;
  alert(`${firstNumber} + ${secondNumber} = ${result}`);
} else if (operation === "-") {
  result = firstNumber - secondNumber;
  alert(`${firstNumber} - ${secondNumber} = ${result}`);
} else if (operation === "*") {
  result = firstNumber * secondNumber;
  alert(`${firstNumber} * ${secondNumber} = ${result}`);
} else if (operation === "/") {
  
  if (secondNumber !== 0) {
    result = firstNumber / secondNumber;
    alert(`${firstNumber} / ${secondNumber} = ${result}`);
  } else {
    alert("Помилка: ділення на нуль неможливе.");
  }
} else {
  alert("Невірна операція. Виберіть 'add', 'sub', 'mult' або 'div'.");
}
