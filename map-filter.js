const number =  [1,33,4,4,45,56,54,];
const result = number.map(x => x*x);
console.log(result);

const biger = number.filter(x => x > 4);
console.log(biger);

const name = number.find(x => x<45);
console.log(name);