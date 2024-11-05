const start8 = 100; 3.
const end8 = 200;
let multiplesOfThree = "";
for (let i = start8; i <= end8; i++) {
  if (i % 3 === 0) {
    multiplesOfThree += i + " ";
  }
}
console.log("Числа від 100 до 200, кратні 3:", multiplesOfThree);
