let userAnswerArray = [];
userAnswerArray[0] = prompt("Введіть перший рядок:");
userAnswerArray[1] = prompt("Введіть другий рядок:");
userAnswerArray[2] = prompt("Введіть третій рядок:");

userAnswerArray.sort(() => Math.random() - 0.5);

alert(userAnswerArray.join(", "));

const number = prompt("Введіть п'ятизначне число:");

if (number.length === 5 && !isNaN(number)) {
    
    alert(number.split("").join(" "));
} else {
    alert("Баран то пятизначне число");
}


