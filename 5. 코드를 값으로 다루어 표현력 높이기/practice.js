
// filter 함수
const filter = (f, iter) => {
  let newArr = [];
  for (const a of iter) {
    if (f(a)) newArr.push(a);
  }
  return newArr;
}
// map 함수
const map = (f, iter) => {
  let newArr = [];
  for (const a of iter) {
    newArr.push(f(a));
  }
  return newArr;
}
// reduce 함수
const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }

  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
} 


const log = console.log;


const products = [
  {name: '반팔티', price: 15000},
  {name: '긴팔티', price: 20000},
  {name: '핸드폰케이스', price: 15000},
  {name: '후드티', price: 30000},
  {name: '바지', price: 25000}
];
const add = (a, b) => a + b;

// 중첩해서 사용하기
log(reduce(add, map(p => p.price, filter(p => p.price < 20000, products))));

// 코드를 값으로 다루어 표현력 높이기
const go = (...args) => reduce((a, f) => f(a), args);
const pipe = (fx, ...fs) => (...as) => go(fx(...as), ...fs);
