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