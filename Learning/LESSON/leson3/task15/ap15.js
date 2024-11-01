const num = 60; 

let evenDivisorsSum = 0;

for (let i = 1; i <= num; i++) 
    {
  if (num % i === 0 && i % 2 === 0) {
    evenDivisorsSum += i;
  }
    }
console.log(`Сума парних дільників числа ${num}:`, evenDivisorsSum);
