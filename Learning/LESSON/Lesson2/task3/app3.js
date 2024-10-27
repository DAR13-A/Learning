let operation = prompt("Що ви хочете зробити? (add, sub, mult, div)");

let firstNumber = parseFloat(prompt("Введіть перше число:"));
let secondNumber = parseFloat(prompt("Введіть друге число:"));

let result;

if (operation === "add") {
  result = firstNumber + secondNumber;
  alert(`${firstNumber} + ${secondNumber} = ${result}`);
} else if (operation === "sub") {
  result = firstNumber - secondNumber;
  alert(`${firstNumber} - ${secondNumber} = ${result}`);
} else if (operation === "mult") {
  result = firstNumber * secondNumber;
  alert(`${firstNumber} * ${secondNumber} = ${result}`);
} else if (operation === "div") {
  
  if (secondNumber !== 0) {
    result = firstNumber / secondNumber;
    alert(`${firstNumber} / ${secondNumber} = ${result}`);
  } else {
    alert("Помилка: ділення на нуль неможливе.");
  }
} else {
  alert("Невірна операція. Виберіть 'add', 'sub', 'mult' або 'div'.");
}
