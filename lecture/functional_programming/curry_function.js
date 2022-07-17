// https://www.youtube.com/watch?v=I4MebkHvj8g

// Currying takes a funciton that receives more than one parameter and breaks it into a series of unary ( on parameter ) functions

// const buildSandwich1 = (ingredient1) => {
//   return (ingredient2) => {
//     return (ingredient3) => {
//       return `${ingredient1}, ${ingredient2}, ${ingredient3}`;
//     }
//   }
// }

const buildSandwich = (ingredient1) =>(ingredient2) => ingredient3 =>`${ingredient1}, ${ingredient2}, ${ingredient3}`;


const mySandwich = buildSandwich("Bacon")("Lettuce")("Tomato");

// console.log('mySandwich', mySandwich);

const multifly = (x, y) => x * y;
const curriedMultiply = x => y => x * y;

console.log(multifly(2, 3));
console.log(curriedMultiply(2)(3));

const timesTen = curriedMultiply(10);
console.log(timesTen(2));

const updateElemText = id => content => document.querySelector(`#${id}`).textContent = content;
const updateHeaderText = updateElemText('header');
updateHeaderText('hellodsdfdsf');

// Another common use of currying is function composition
// Allows calling small functions in a specific order

const addCustomer = fn => (...args) => {
  console.log('saving customer info');
  return fn(...args);
}

const processOrder = fn => (...args) => {
  console.log(`processing order #${args[0]}`);
  return fn(...args);
}

let completeOrder = (...args) => {
  console.log(`Order #${[...args].toString()} completed`);
}

completeOrder = (processOrder(completeOrder));
console.log(completeOrder);
completeOrder = (addCustomer(completeOrder));


// Curried
// Requires a function with a sixed number of parameters
const curry = (fn) => {
  return curried = (...args) => {
    if (fn.length !== args.length) {
      return curried.bind(null, ...args);
    }
    return fn(...args);
  }
}

const total = (x, y, z) => x + y + z;
const curriedTotal = curry(total);
console.log(curriedTotal(10)(20)(30));
