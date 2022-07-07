reduce는 값을 축약해 나가는 함수이다.

```
const nums = [1, 2, 3, 4, 5];
let total = 0;
for (const n of nums) {
  total = total + n;
}

const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  } 

  for (const n of iter) {
    acc = f(acc, a);
  }
  return acc;
};
const add = (a, b) => a + b;
log(reduce(addm 0, [1, 2, 3, 4, 5]));
```