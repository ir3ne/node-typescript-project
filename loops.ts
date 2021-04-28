const numberArr: number[] = [1,2,3,4,5];
let sum: number = 0;
let average: number = 0;
for (const n of numberArr) {
  sum += n;
}

average = sum / numberArr.length;

console.log('sum', sum);
console.log('average', average);

