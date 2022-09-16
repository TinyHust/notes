## reload data

[REF](https://obaranovskyi.medium.com/rxjs-data-reload-pattern-with-custom-operators-factory-functions-b929a2103dd8)

```javascript
import { merge, Observable, of, ReplaySubject, Subject } from 'rxjs';
import { map, scan, switchMap } from 'rxjs/operators';

function Identity<T>(value: T): T {
  return value;
}

interface User {
  id: number;
  name: string;
}

class UserMockWebService {
  readonly users: User[] = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Liza' },
    { id: 3, name: 'Suzy' }
  ];

  getUserById(id: number): Observable<User> {
    const user = this.users.find((user: User) => {
      return user.id === id;
    });

    return of(user) as Observable<User>;
  }
}

function reload(selector: Function = Identity) {
  return scan((oldValue, currentValue) => {
    if(!oldValue && !currentValue)
      throw new Error(`Reload can't run before initial load`);

    return selector(currentValue || oldValue);
  });
}

function combineReload<T>(
  value$: Observable<T>,
  reload$: Observable<void>,
  selector: Function = Identity
): Observable<T> {
  return merge(value$, reload$).pipe(
    reload(selector),
    map((value: any) => value as T)
  );
}

class UserService {
  private reloadSubj = new Subject<void>();
  private idRplSubj = new ReplaySubject<number>(1);

  userObs$: Observable<User> =
    combineReload(
      this.idRplSubj,
      this.reloadSubj
    )
    .pipe(
      switchMap((userId: number) => {
        return this.userWebService.getUserById(userId);
      })
    );

  constructor(private userWebService: UserMockWebService) {}

  setId(id: number): void {
    this.idRplSubj.next(id);
  }

  reload(): void {
    this.reloadSubj.next();
  }
}

const userWebService = new UserMockWebService();
const userService = new UserService(userWebService);

userService.userObs$.subscribe(console.log);

userService.setId(2);
userService.setId(3);
userService.reload();
userService.setId(1);
```

```javascript
import { BehaviorSubject, OperatorFunction } from 'rxjs';
import { map, scan } from 'rxjs/operators';

export interface Car {
  id: number;
  make: string;
  color: string;
}

export function assign<T>(): OperatorFunction<Partial<T>, Partial<T>> {
  return scan((oldValue: Partial<T>, newValue: Partial<T>) => {
    return { ...oldValue, ...newValue };
  });
}

export class CarService {
  private carBhvSubj = new BehaviorSubject<Partial<Car>>({ color: 'White' });
  car$ = this.carBhvSubj.asObservable().pipe(assign());

  isCarValid$ = this.car$.pipe(
    map((car: Partial<Car>) => {
      return Boolean(car.color && car.make);
    })
  );

  updateCar(carPart: Partial<Car>): void {
    this.carBhvSubj.next(carPart);
  }
}

const carService = new CarService();
carService.car$.subscribe(console.log);
carService.isCarValid$.subscribe(console.log);

carService.updateCar({ make: 'BMW' });
```
