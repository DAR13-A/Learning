const start1 = 10;
const end1 = 20;
let result = "";

for (let i = start1; i <= end1; i++) {
  if (i === 0) continue;
  
  if (i !== start1 && !(i === 9 && result.endsWith("7"))) {
    result += ", ";
  }
  result += i;
}

alert(result);
