let userAnswerArray = [];
userAnswerArray[0] = getValueUser("Введіть перший рядок:", "2");
if (ChoiseUserAnswerCurrent(userAnswerArray[0]))
{
    userAnswerArray[1] = getValueUser("Введіть другий рядок:", "2");
    if(ChoiseUserAnswerCurrent(userAnswerArray[1]))
    {
        userAnswerArray[2] = getValueUser("Введіть третій рядок:", "2");
        if(ChoiseUserAnswerCurrent(userAnswerArray[2]))
            {
                userAnswerArray.sort(() => Math.random() - 0.5);
        
                alert(userAnswerArray.join(", "));
            }
    
        
    }
    
}


const number = prompt("Введіть п'ятизначне число:");

if (number.length === 5 && !isNaN(number)) {
    
    alert(number.split("").join(" "));
} else {
    alert("Баран то пятизначне число");
}

function ChoiseUserAnswerCurrent(userAnswer)
{
    if(userAnswer === null)
            {
                alert("Внесені дані не коректні...");
                return false;
            }
            return true;
}