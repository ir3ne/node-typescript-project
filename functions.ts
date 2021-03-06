function greeting(name: string, lang: 'en' | 'it' | 'es'): string {
  const greetMap = {
    en: 'Hello',
    it: 'Ciao',
    es: 'Hola'
  };

  const greetingWord = greetMap[lang];

  console.log(`${greetingWord} ${name}`);
  return 'This is the returned value';
}

greeting('Dalì', 'en');
greeting('Dalì', 'es');

const returnedValue = greeting('Dalì', 'it');
console.log(returnedValue);

const random = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
}

console.log(random(3, 5));
console.log(random(5, 3));

const arraySum = (numbers: number[]) => {
  let sum: number = 0;

  for (const n of numbers) {
    sum +=n;
  }

  return sum;
}

console.log(arraySum([1,2,3,4,5]));
