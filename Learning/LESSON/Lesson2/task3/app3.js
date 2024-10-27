function getValidOperation() {
    const operation = getValueUser("Що ви хочете зробити? (+, -, *, /)");
    if (operation === "+" || operation === "-" || operation === "*" || operation === "/") {
      return operation;
    } else {
      alert("Невірна операція. Виберіть '+', '-', '/' або '*'.");
      return null;
    }
  }
  
  function getValidNumber(promptText) {
    const number = parseFloat(getValueUser(promptText));
    if (!isNaN(number)) {
      return number;
    } else {
      alert("Будь ласка, введіть правильне число.");
      return null;
    }
  }
  
  let operation = getValidOperation();
  if (operation !== null) {
    let firstNumber = getValidNumber("Введіть перше число:");
    let secondNumber = getValidNumber("Введіть друге число:");
  
    if (firstNumber !== null && secondNumber !== null) {
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
      }
    }
  }
  