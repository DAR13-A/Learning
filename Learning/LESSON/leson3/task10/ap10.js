const start6 = 1;
const end6 = 500;
let sumForAverage = 0;
for (let i = start6; i <= end6; i++) {
  sumForAverage += i;
}
let average = sumForAverage / (end6 - start6 + 1);
console.log("Середнє арифметичне чисел від 1 до 500:", average);
