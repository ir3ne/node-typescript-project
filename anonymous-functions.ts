// anonymous functions allow us  to have hight order functions.

// This is an high order function = has functions as parameters
function printFunction(func: () => void) {
  console.log('calling function');
  func();
  console.log('function called');
}

// the function inside is the anonymous function
printFunction(() => {
  console.log('hello'); 
})

// those functions are important because JS and Typescript use them a lot
// es map that is an high order function
// es filter
// es find - find returns a value and not an array. It returns the first value that respects the rule

const numbers: number[] = [1,2,3,4,5];
// const squaredNumbers: number[] = [];

// for (let num of numbers) {
//   squaredNumbers.push(num*num);
// }
const squaredNumbers: number[] = numbers.map(num => num * num);
const oddNumbers = numbers.filter(num => num % 2 !== 0);

console.log(numbers);
console.log(squaredNumbers);
console.log(oddNumbers);
