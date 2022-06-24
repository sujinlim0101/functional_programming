```
const products = [
  { name: '반팔티', price: 15000 },
  { name: '회색티', price: 10000 },
  { name: '긴팔티', price: 25000 },
];

const map = (f, iter) => {
  let res = [];
  for (const p of iter) {
    res.push(f(p));
  }
  return res;
}

map(p => p.name, products);
```

## iterable protocols
```
document.querySelectorAll('*').map(elem => elem) // 에러
```
`document.querySelector` 는 Array를 상속받은 객체가 아니기 때문에 map을 쓸수 없다.

`document.querySelector`은 iterable protocols를 따르기 때문이다.

```
const it = document.querySelectorAll('*)[Symbol.iterator]();

log(it.next());
log(it.next());
log(it.next());
log(it.next());
log(it.next());
```

```
function *gen() {
  yield 2;
  yield 3;
  yield 4;
}
log(map(a => a * a, gen()));
```

```
let m = new Map();

m.set('a', 10);
m.set('b', 20);
const it = m[Symbol.iterator]();

log(it.next());
log(it.next());
log(it.next());

log(new Map(map([k, a]) => [k, a * 2], m));
```