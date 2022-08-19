## mixins
REF
- [https://www.typescriptlang.org/docs/handbook/mixins.html](https://www.typescriptlang.org/docs/handbook/mixins.html)
- [https://wanago.io/2021/12/13/api-nestjs-mixin-pattern/](https://wanago.io/2021/12/13/api-nestjs-mixin-pattern/)

```typescript
type Constructable  = new (
  ...args: any[]
) => {};
 
function Person<BaseType extends Constructable >(Base: BaseType) {
  return class extends Base {
    name: string = '';
  };
}

const Teacher = Person(
  class {
    subject: string = '';
  }
)
 
const john = new Teacher();
 
john.name = 'John';
john.subject = 'Math';

type Constructor<Type = {}> = new (
  ...args: any[]
) => Type;
 
type HasTheSubject = Constructor<{ subject: string }>;

function CanIntroduceSelf<BaseType extends HasTheSubject>(Base: BaseType) {
  return class extends Base {
    introduce() {
      console.log(`Hello, I teach ${this.subject}`);
    }
  };
}

const Teacher2 = CanIntroduceSelf(
  class {
    subject: string;
 
    constructor(subject: string) {
      this.subject = subject;
    }
  }
)
 
const mathTeacher = new Teacher2('math');
mathTeacher.introduce(); // Hello, I teach math
```

```typescript
export type Constructable = new (...args: any[]) => {};

export function Timestamped<BC extends Constructable>(Base: BC) {
    return class extends Base {
        timestamp = new Date();
    };
}

class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

const TimestampedPoint = Timestamped(Point);

const p = new TimestampedPoint(10, 10);
p.x + p.y;
p.timestamp.getMilliseconds();

export function Tagged<BC extends Constructable>(Base: BC) {
    return class extends Base {
        z: number = 0;
    };
}

class SpecialPoint extends Tagged(Timestamped(Point)) {
    z: number;
    constructor(x: number, y: number, z: number) {
        super(x, y);
        this.z = z;
    }
}

const p2 = new SpecialPoint(10, 10, 10);
p2.x + p2.y + p2.z;
p.timestamp.getMilliseconds();
```

```typescript
function applyMixins(derivedConstructor: any, constructors: any[]) {
  constructors.forEach((baseConstructor) => {
    Object.getOwnPropertyNames(baseConstructor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedConstructor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseConstructor.prototype, name) ||
        Object.create(null)
      );
    });
  });
  return derivedConstructor
}

class Day {
  day: number;
  month: number;
  year: number;
 
  setDay(day: number, month: number, year: number) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
}
 
class Time {
  hour: number;
  minute: number;
  second: number;
 
  setTime(hour: number, minute: number, second: number) {
    this.hour = hour;
    this.minute = minute;
    this.second = second;
  }
}
 
const EventTakingPlace = applyMixins(
  class {
    name: string;
    place: string;
    constructor(name: string, place: string) {
      this.name = name;
      this.place = place;
    }
  },
  [Day, Time]
)
 
const johnMayerConcert = new EventTakingPlace('John Mayer concert', 'New York');
 
johnMayerConcert.setDay(1, 3, 2022);
johnMayerConcert.setTime(19, 30, 0);
```

```typescript
function Day<BaseType extends Constructor>(Base: BaseType) {
  return class extends Base {
    day: number;
    month: number;
    year: number;
 
    setDay(day: number, month: number, year: number) {
      this.day = day;
      this.month = month;
      this.year = year;
    }
  }
}
 
function Time<BaseType extends Constructor>(Base: BaseType) {
  return class extends Base {
    hour: number;
    minute: number;
    second: number;
 
    setTime(hour: number, minute: number, second: number) {
      this.hour = hour;
      this.minute = minute;
      this.second = second;
    }
  }
}
 
const EventTakingPlace = Day(
  Time(
    class {
      name: string;
      place: string;
      constructor(name: string, place: string) {
        this.name = name;
        this.place = place;
      }
    }
  )
)
```