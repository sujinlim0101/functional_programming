// 참고: youtube.com/watch?v=kclGXphtmVg

const add2 = (x) => x + 2;
const subtract1 = (x) => x - 1;
const multiplyBy5 = (x) => x * 5;

const result = multiplyBy5(subtract1(add(4)));
console.log('result', result);

// Note: Ramda.js and lodash libraries have their own built in compose and pipe functions. lodash calls pipe "flow"

// The higher order function "reduce" takes a list of values and applies a fucntion to each of those values, accumulating a single result
