const double = num => num * 2;
const add = (a , b) => a + b;
const giveMe5 = () => 5;
const doMath  = (x , y) => {
    const sum = x  + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const total = doMath(20 , 44);
console.log(total);