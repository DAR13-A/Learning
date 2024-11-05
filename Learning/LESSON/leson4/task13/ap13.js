const num = 60; 
let divisors = "";
for (let i = 1; i <= num; i++) {
  if (num % i === 0) {
    divisors += i + " ";
  }
}
console.log(`Дільники числа ${num}:`, divisors);
