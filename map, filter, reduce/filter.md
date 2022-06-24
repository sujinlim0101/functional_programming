```
const filter = (f, iter) => {
  let res = [];
  for (const  a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
};

filter(p => p.price < 20000);
```