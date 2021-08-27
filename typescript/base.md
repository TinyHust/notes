## generic interface
```
interface opState {
  id: string; 
  over: boolean; 
  overLeft: boolean; 
  overRight: boolean;
};

type opStateKey = keyof opState;

interface actionOpState<T extends keyof U, U> {
  optionId: string;
  type: T;
  value: U[T]
};

const a: actionOpState<opStateKey, opState> = {optionId: 'string', type: 'id', value: false};
const b: actionOpState<keyof opState, opState> = {optionId: 'string', type: 'id', value: false};
```


## create tsconfig
```
tsc --init
```