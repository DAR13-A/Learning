const num = 60; 

let evenDivisorsCount = 0;

for (let i = 1; i <= num; i++) {
  
  if (num % i === 0 && i % 2 === 0) {
    evenDivisorsCount++; 
  }
}

console.log(`Кількість парних дільників числа ${num}:`, evenDivisorsCount);
