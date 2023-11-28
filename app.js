// 1. template string
const phone = { name : 'iphone', colour: 'golden', price: 150000}
const myNote = `Recently i bought a ${phone.name}. it is a birthday gift.`
// console.log(myNote);

// 2. arrow function
const fiveTimes = num => num / 5;
const value = fiveTimes(45);
// console.log(value);

const doMath = (a, b) => {
    const add1 = a + 2;
    const add2 = b + 2;
    const sum = add1 * add2;
    return sum;
}
const total = doMath(6, 8);
// console.log(total);

const multiplication = (a, b, c) => {
    const threeTime = a * b * c;
    return threeTime
}
const getValue = multiplication( 3, 5, 7);
// console.log(getValue);

//3. map function
const numbers = [ 3, 7, 5, 11];
const output = numbers.map(number => number * 5);
// console.log(output);

//4. filter method
const num = [5, 13, 7, 4, 30, 5, 2, 19];
const oddNum = num.filter(number => number % 2 == 1);
// console.log(oddNum);

const products = [
    {name: 'iphone', price: 150000, colour: 'golden'},
    {name: 'smartwatch', price: 5000, colour: 'pink'},
    {name: 'airbuds', price: 2500, colour: 'white'}
]
const expensive = products.find(product => product.price == 5000);
// console.log(expensive);

const fish = {name: 'Ilish', price: 500,
address: 'padma'};
const {price} = fish;
// console.log(price);

const nums = [ 3, 5, 7, 11, 13];
const [first, second, third, fourth, fifth] = nums;
// console.log(third);

function adding(a, b, c = 7){
    const sum = a + b + c;
    return sum;
}
const abc = adding(3, 5);
console.log(abc);