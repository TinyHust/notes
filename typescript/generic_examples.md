```
const mutateConcat = <K extends keyof any, U>(
  state: Record<K, U[]>,
  key: K,
  val: U[]
) => {
  state[key] = state[key].concat(val);
};

const obj = { a: [1, 2, 3], b: 1 };
mutateConcat(obj, "a", [4, 5, 6]);
```