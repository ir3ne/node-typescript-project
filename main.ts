console.log('ciao 🤘');
let myVar: number = 3;
myVar += 10;
console.log('myVar = ', myVar);

// è una definizione - un nuovo tipo per ts
interface MyInterface {
  myNumber: number;
  myString: string;
}

let myInterface: MyInterface = {
  myNumber: 10,
  myString: 'hello'
};

console.log('myNumber: ', myInterface.myNumber);
console.log('myString: ', myInterface.myString);