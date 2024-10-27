function getValueUser(questionUser, numberTask)
{
    let userAnswer = prompt(questionUser);
    if(ChoiseUserAnswer(userAnswer, numberTask))
        {
            return userAnswer;
        }
    return null;
}

function ChoiseUserAnswer(userAnswer, numberTask)
{
    if(numberTask === "1" || numberTask === "2")
        {
            if(userAnswer === "" || userAnswer === null)
                {
                    return false;
                }
                else
                {
                    return true;
                }
        }
        
        else
        {
            return true;
        }
}