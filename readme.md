# Learning TYPESCRIPT ⌨

Learning Typescript with [Dave Gray](https://www.youtube.com/@DaveGrayTeachesCode)

### COMPILING TYPESCRIPT INTO JAVASCRIPT

- [x] npm install -g typescript

Environment like Vite or Next.js already have Typescript installed for you to use it. However, if you want to use the TypeScript compiler you need to make the previous global installation.

Then, it enables you to use, for example, the command `tsc -w`. It enables the watch mode, which automatically recompiles your TypeScript files whenever changes are detected. It's useful to see all your errors!

👉 If you wanted to compile .ts to .js:

- [x] run: `tsc <filename>.ts` (to generated the JavaScript file)
- [x] run: `node <filename>.js` (to open the JavaScript file)

👉 If you don't want to be refreshing all everytime you make a change in your typescript file, the following time:

- [x] run: `tsc <filename>.ts -w`

👉 To create a `tsconfig.json` file:

- [x] run: `tsc --init`

Here you can set where the .ts file is going to be (`rootDir:`) and where the .js file is going to be (`outDir:`)
Then, you only have to:

- [x] run: `tsc -w` (you don't have to specify the files because the watcher already knows where they are)

You can also activate the option `"noEmitOnError": true` so the it doesn't compile into .js if the .ts file has any errors (otherwise the compilation doesn't care about the typesscript warnings)

---

### PROJECT STRUCTURE

FILE TREE

- Source folder: typescript file
- Build folder: compiled work ( html, css and js files )

Once you have your files created ( html and typescript ) and all connected ( in the html file you connect the future js file that will be created ), and the tsconfig.json file configured, just run `tsc -w` and the js file will be automatically created in its proper place.

---

---

## Typescript Learning Notes:

Typescript has been developed with Typescript. VSCode too! 😂

🔹 Typescript works in the compilation, Javascript in the execution(that's why you cannot see certain Typescript elements or results in the console)

👉 It is so a very important thing , when doubting, to see how your Typescrips is compiled into Javascript, to avoid mistakes: Go to the [Typescript Playground](https://www.typescriptlang.org/play) to do so❕

🔹 TypeScript adds to Javascript (it's a lie that with Typescript you write less code). It adds `security, hardiness and peace`:

🔹 `name` is a reserved keyword that represents the name of a class or function. It may let you use it as a variable, but it is generally not recommended to use reserved keywords as variable names to avoid confusion and potential issues.

### Type inference

It refers to the compiler's ability to automatically deduce the type of a variable or expression based on its value and context. Instead of explicitly specifying the type of each variable, TypeScript can analyze the code and determine the most appropriate type based on the available information.

For example, if you declare a variable and initialize it with a number, TypeScript will infer that the variable is of type number. Similarly, if you assign a string to another variable, TypeScript will infer that the variable is of type string.

🔴 Careful with the word `any` since it is telling Typescript that it has to ignore the type of your variable.

e.g. TS's gonna treat 'anyValue' as anything:

```
let anyValue: any = 'hola'
```

Also careful with `unknown`.It is similar to the any type, but with stricter type checking (see below in the section 'Void, Never and Unknown')

👉 It is a good idea to define the type when Typescript tells you to, cos otherwise implicity defines it as 'any'.

### Assertions or Casting

It is a way to tell the TypeScript compiler about the type of a value when the compiler cannot infer it automatically. It allows you to override the default type inference and explicitly specify the type of a variable or expression.

```
let num: unknown = 10;

// Assertion using the 'as' keyword
let square = (num as number) * (num as number);
console.log(square); // Output: 100
```

In this example, we have a variable num of type unknown . The unknown type is used when the type of a value is not known at compile-time. However, we know that num is actually a number, so we use the assertion syntax (num as number) to tell the compiler that we want to treat num as a number.

By asserting num as a number, we can perform mathematical operations on it without any compilation errors.

(see below, in the functions section, about the `Definite Assignment Assertion Operator`)

🔹 Real example:

```
const year = document.getElementById("year")! as HTMLElement;
const thisYear = new Date().getFullYear() as unknown as number;
year.setAttribute("data-year", thisYear.toString());
year.textContent = thisYear.toString();
```

In TypeScript, the `exclamation mark (!)` is known as a non-null assertion operator. It is used to tell the compiler that the value obtained from document.getElementById("year") will not be null or undefined.

The `as HTMLElement` part asserts that the value returned by document.getElementById("year") will always be an HTMLElement, and not null or undefined. If the value is null or undefined, it will throw a runtime error.

This assertion allows you to safely use the year variable without worrying about null or undefined values.

🔹Forced casting or double casting (two assertions). Example:

```
10 as unknown as string;
```

It is needed to say as unknown first, cos otherwise TS wouldn't like 10 to be as string, it's too obvious it's a number.

### Functions

For example, functions don't have inference without context (in case of anonymous functions with context, yes, of course).

🔹 With objects as parameters, you can do the following:

If you already have a type:

```
type Guitarist = {
    name: string,
    active?: boolean,
    albums: (string | number)[]
}

let jp: Guitarist = {
    name: "John Doe",
    active: true,
    albums: ['I', 'II', 'IV']
}

const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name}`
}

```

If you don't have a type:

```
function sayHi({ name, age }: { name: string, age: number }) {
  console.log(`Hi ${name}! You are ${age} years old.`);
}

sayHi({ name: "John", age: 25 });
```

Or:

```
function sayHi(person: {name: string, age: number}) {
  const { name, age } = person;
  console.log(`Hi ${name}! You are ${age} years old.`);
}

sayHi({ name: "Alice", age: 30 });

```

🔹 How to give types to an arrow function?

```
const add = (a: number, b: number): number => {
  return a + b
}
```

🔹 How to give types to a function that is a parameter of another function? :

```
const sayHiFromFunction = (fn: (name: string) => void) => {
  fn('John')
}

const sayHi = (name: string) => {
  console.log(`Hola ${name}`)
}

sayHiFromFunction(sayHi)
```

### Void, Never and Unknown

We say 'void' in the previous example cos the function is not expected to have a 'return' or it doesn't matter if is has it.

🔹`void` is used when a function does not return a value. When a function's return type is specified as void , it means that the function may not return any value or it may return undefined (example, when doing console.log).

🔹On the other hand, `never` is used to represent a type that indicates a value that will never occur. It is typically used in scenarios where a function does not return at all, or when it always throws an error or enters an infinite loop. For example:

```
function throwError(message: string): never {
  throw new Error(message);
}
```

```
const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
  }
};
```

🔹 `unknown` is similar to the "any" type but with stricter type checking. When a variable is assigned the "unknown" type, TypeScript requires explicit type checking or type assertions before performing operations on that variable.

```
(10 as unknown) as string
```

### Type Alias, Optional Property and Optional chainning operator

- A `type alias` allows you to create a new name for an existing type. It can be useful to make your code more readable and maintainable.

- you can make a `property optional` in an interface or type by appending a question mark `?` to the property name.

- The `optional chaining operator ( ?. )` allows you to safely access properties of an object that may be null or undefined , without causing an error.

```
type Person = {
  name: string;
  age: number;
  address?: string; // Optional Property
};

const person: Person = {
  name: "John Doe",
  age: 25,
};

console.log(person.address); // Output: undefined
```

### Mutability

Mutability: It refers to the ability to change or modify a value or object after it has been created. By default, objects and arrays in TypeScript are mutable, meaning their properties or elements can be modified, added, or removed.

- `readonly` : It is a TypeScript modifier that can be applied to properties or index signatures of an object or array. When a property is marked as readonly , it means that its value cannot be modified after it has been initialized. Similarly, when an array is marked as readonly , it means that its elements cannot be modified, added, or removed. For example:

```
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "John",
  age: 30,
};

person.name = "Jane"; // Modifying a mutable property

const readonlyPerson: Readonly<Person> = {
  name: "John",
  age: 30,
};

readonlyPerson.name = "Jane"; // Error: Cannot assign to 'name' because it is a read-only property
```

We could do something similar in Javascript using the `Object.freeze()` method.

### Interface VS Type Alias

Both 'interfaces' and 'types' can be used to define object shapes and enforce contracts.

- Interface: The interface keyword is used to define a contract that specifies the structure of an object. It primarily focuses on describing the shape of an object and the types of its properties or methods. Interfaces can be extended and implemented by other interfaces or classes, allowing for code reuse and enforcing consistency.

- Type: The type keyword, on the other hand, is used to create a type alias or a union of types. It allows you to create a new name for an existing type or define complex types that may involve unions, intersections, or mapped types. Type aliases provide more flexibility than interfaces, as they can represent not only object shapes but also other types such as unions, intersections, and primitive types.

In general, prefer using interface when defining the shape of objects and type when creating more complex types or unions.

-- MORE CLARIFICATION:

👉 One key difference is that 'interfaces' can be implemented by classes, while 'types' cannot. This is because `interfaces are used to define the structure of an object, while types are used to define the properties and methods that an object should have.`

🔹 'Interfaces' in OOP:

In a class, an interface defines a contract or a set of rules that the class must adhere to. It specifies a list of method signatures (without any implementation details) that the class implementing the interface must provide. The interface acts as a blueprint for the class, ensuring that it has certain methods available for use.

When a class implements an interface, it must provide implementations for all the methods defined in the interface. This enforces a consistent structure and behavior across different classes that implement the same interface.

Interfaces enable `polymorphism`, allowing objects of different classes to be treated interchangeably if they implement the same interface. This promotes code reusability, modularity, and flexibility in object-oriented programming.

'Types' offer more flexibility and can be used in other scenarios, such as unions, intersections, and mapped types:

### Template union types

Creating your own types (example):

```
type HexadecimalColor = `#${string}`

const color: HexadecimalColor = '0033ff' // ERRROR
const color2: HexadecimalColor = '#0033ff' // ok!

```

Template union types allow you to create flexible and reusable types by combining multiple types together using the | (pipe) operator. Examples

```
let item: number | string;

item = 'Hello'; // OK
item = 1; // OK
item = true; // ERROR
```

```
type Status = "success" | "error" | "pending";

let status: Status = "success"; // OK
let status2: Status = "others"; // ERROR
```

### Arrays, Tuples, Objects and Enums

🔹 Arrays:

```
let myArray: string[] = ['Vanesa', 'dev'];
```

Union types:

```
let myArray: (string | number | boolean)[] = ["Vanesa", 36, true];
```

🔹 Tuples allow you to express an array with a fixed number of elements, where each element can have its own data type. TypeScript tuples are defined by specifying the types of each element within square brackets:

```
let myTuple: [string, number, boolean] = ['Vanesa', 36, true];
```

🔹 Objects:

See this. How is it I can assign an array to an object?:

```
let myObj: object
myObj = []
```

In TypeScript, the type `object` represents a non-primitive type that can hold any value. When you assign an array to an object of type `object` , it is allowed because arrays are considered objects in JavaScript. In TypeScript, arrays inherit from the `object` type.

However, assigning an array to an object of type `object` will not provide you with the array-specific methods and properties. It will only allow you to access the common properties and methods inherited from the base `object` type.

If you specifically want to define an array in TypeScript, it is recommended to use the `Array` type or specify the type of elements within square brackets, like `number[]` for an array of numbers or `string[]` for an array of strings.

🔹 Enums:

Enums provide a way to define a set of named constants, which can be useful for representing a fixed set of values or options in your code:

```

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

const myDirection: Direction = Direction.Up;
console.log(myDirection); // Output: 0 (Index of 'Up' in the enum)
```

### Classes

Typescript asks you to be quite repetitive when creating a class:

```
class Coder {

    name: string
    music: string
    age: number
    lang: string

    constructor(
        name: string,
        music: string,
        age: number,
        lang: string = 'Typescript'
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge() {
        return `Hello, I'm ${this.age}`
    }
}
```

However you can use keywords such as `public`, `readonly`, `private` or `protected` not to be so redundant. They are called `access modifiers`:

```

class Coder {

    secondLang!: string    //The Definite Assignment Assertion Operator

    constructor(
        public name: string,
        readonly music: string,
        private age: number,
        protected lang: string = 'Typescript'
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge() {
        return `Hello, I'm ${this.age}`
    }
}
```

- `Public`: a public property is a member variable or attribute of a class that can be accessed and modified from outside the class.

- `Readonly`: can only be read and not modified after it is initialized.

- `Private`: a member variable or attribute of a class that can only be accessed and modified within the class itself. However, it could be accessed in a subclass, for example, through a method:

```
 public getAge() {
        return `Hello, I'm ${this.age}`
    }

const Vanesa = new Coder('Vanesa', 'Indie', 36)
console.log(Vanesa.getAge())  // `Hello, I'm 36`
```

- `Protected`: a member variable or attribute of a class that can only be accessed and modified "within the class itself and its subclasses". This allows for more control over data access and manipulation within a class hierarchy.

It is declared with the "protected" access modifier, which restricts its visibility to the class and its subclasses (when compiled into JS)

Protected properties are not accessible by other parts of the program that are not subclasses of the class that defines them.

- `Definite Assignment Assertion Operator`: allows developers to explicitly inform the compiler that a variable has been assigned a value, even if the compiler is unable to detect it. It is denoted by the "!" symbol placed after the variable name.

This can be useful in situations where the compiler is unable to infer the assignment due to complex control flow or conditional logic. However, it is important to use this operator with caution, as it bypasses the compiler's type checking and can potentially lead to runtime errors if the variable is not actually assigned a value.

### Getter and Setter methods in classes

See the following example:

```
class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("Param is not an array of strings"); // it will appear in the console
  }
}

const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led Zep"];

//GETTER:
console.log(MyBands.data);
//SETTER:
MyBands.data = [...MyBands.data, "ZZ Top"];
//GETTER:
console.log(MyBands.data);
// MyBands.data = ["Van Halen", 5150]; // must be string data

```

- The class has a constructor that initializes the "dataState" property as an empty array.

- This property is used to store the data related to bands, which can be accessed through the getter method called "data". The setter method called "data" is used to modify the "dataState" property by assigning a new array of strings to it (Remember that setters can never return a value)

- Since the "dataState" property is private, it cannot be accessed or modified directly from outside the class. To access or modify it, we need to use the public getter and setter methods provided by the class.

### Intersection Types

Intersection types allow you to combine multiple types into a single type by using the `&  (ampersand) operator`. Intersection types represent values that have all the properties and methods of the combined types.

```
interface Person {
  name: string;
  age: number;
}

interface Employee {
  companyId: string;
  position: string;
}

type EmployeePerson = Person & Employee;

const employee: EmployeePerson = {
  name: "John",
  age: 30,
  companyId: "ABC123",
  position: "Manager",
};

console.log(employee.name); // Output: John
console.log(employee.companyId); // Output: ABC123
```

### Lookup Types:

Lookup types allow you to retrieve the type of a property from another type based on a given key. They are useful when you want to extract specific properties or their types from an existing type.

#### `Lookup Types` can be used in conjunction with `intersection types` to extract specific properties from multiple types and create a new type that includes only those properties.

### Type indexing and keyof:

Type indexing in TypeScript refers to the ability to access or manipulate object properties using index notation ( [] ) instead of dot notation ( . ). It allows you to dynamically access or assign values to object properties based on their keys. E.g:

```
interface Person {
  name: string;
  age: number;
  email: string;
}

const person: Person = {
  name: "John Doe",
  age: 30,
  email: "johndoe@example.com",
};

const propertyName: keyof Person = "name";
const propertyValue = person[propertyName]; // Equivalent to person.name
console.log(propertyValue); // Output: John Doe

person["age"] = 31; // Equivalent to person.age = 31
console.log(person.age); // Output: 31

```

`Index Signatures`: Index signatures allow you to define the types of values associated with dynamic keys in an object or dynamic indexes in an array. You can use square brackets [] to define an index signature and specify the type of values associated with the keys or indexes. Here's an example:

```
interface Dictionary {
  [key: string]: number;
}

const myDictionary: Dictionary = {
  apple: 5,
  banana: 3,
  cherry: 8,
};

console.log(myDictionary['apple']); // Output: 5
```

#### 👉 Typescript requires an index signature if you attempt to access an object property dynamically:

In TypeScript, if you attempt to access an object property dynamically using bracket notation (e.g., object[property] ), you need to provide an index signature to ensure type safety. An index signature defines the types for all possible keys of an object that are not explicitly defined.

Here's an example to illustrate this concept:

```
interface MyObject {
  [key: string]: any; // Index signature
}

const obj: MyObject = {
  name: "John",
  age: 25,
};

const propertyName = "name";
const propertyValue = obj[propertyName]; // Accessing property dynamically

console.log(propertyValue); // Output: "John"
```

In the above example, we define an interface MyObject with an index signature [key: string]: any . This means that obj can have any string key, and the corresponding value can be of any type ( any in this case). By providing the index signature, TypeScript allows us to access obj dynamically using bracket notation without any compilation errors.

Without the index signature, TypeScript would throw a compilation error because accessing properties dynamically can potentially lead to runtime errors if the property does not exist on the object. The index signature helps TypeScript ensure type safety by allowing dynamic property access while still enforcing type checks.

It's important to note that using an index signature should be done with caution, as it bypasses some of TypeScript's static type checks.

#### 👉 How can you iterate through an object you've created that does not have an index signature provided?

In the following case, there would be no problem because you have an index signature:

```
interface Student {
  [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "Doug",
  GPA: 3.5,
  classes: [100, 200],
};

for (const key in student) {
  console.log(`${key}: ${student[key]}`);
}
```

We need to add `undefined` as a type, because we have an `optional property` (classes?).

However, if you don't have the index signature, it will give an error. You have the alternative of using the `keyof operator`:

```

interface Student {
name: string;
GPA: number;
classes?: number[];
}

const student: Student = {
name: "Doug",
GPA: 3.5,
classes: [100, 200],
};

for (const key in student) {
console.log(`${key}: ${student[key as keyof Student]}`);
}

```

The `keyof` keyword in TypeScript is used to obtain a union type of all the keys (property names) of a given type or interface. It allows you to refer to the keys of an object type without explicitly specifying them.

In this example, `keyof Student` is used to create a type that represents all the possible keys of the Student interface. It ensures that the key variable in the loop is constrained to only accept valid property names of the Student interface.

By using key as keyof Student, the code is essentially telling TypeScript to treat key as a valid key of the Student interface. This enables the code to access the corresponding value of that property from the student object using student[key as keyof Student] .

This usage ensures type safety and `prevents accessing non-existent properties or mistyped property names.`

#### 👉 But what if you don't have the name of the interface (in this case Student) and only have the name of the object you created from that interface (in this case student):

Then, you can use `typeof`:

```
for (const key in student) {
  console.log(`${key}: ${student[key as keyof typeof student]}`);
}

```

#### Now an example of `keyof` with a function:

```
interface Student {
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "Doug",
  GPA: 3.5,
  classes: [100, 200],
};

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, "classes");
```

### Generics

Generics in TypeScript allow you to create reusable components or functions that can work with a variety of types. They provide a way to define placeholders for types that will be specified later when using the generic component or function.

```
class Box<T> {
  private item: T;

  constructor(item: T) {
    this.item = item;
  }

  getItem(): T {
    return this.item;
  }

  setItem(item: T): void {
    this.item = item;
  }
}

const numberBox = new Box<number>(42);
console.log(numberBox.getItem()); // Output: 42

const stringBox = new Box<string>("Hello, TypeScript!");
console.log(stringBox.getItem()); // Output: Hello, TypeScript!

```

👉 Notice that `<number>` or `<string>`, when we defined our consts, are not necessary, but are a way of typing our new Box(es).

By using generics, you can write code that is more flexible and reusable. It allows you to create functions or classes that can work with different types without sacrificing type safety.

🔹 It's useful with functions:

```
const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log(isObj(true)); //false
console.log(isObj("John")); //false
console.log(isObj([1, 2, 3])); //false
console.log(isObj({ name: "John" })); //true
console.log(isObj(null)); //false

```

🔹 This is in an interface:

```

interface BoolCheck<T> {
    value: T,
    is: boolean,
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false }
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { value: arg, is: false }
    }
    return { value: arg, is: !!arg }
}

console.log(isTrue(false)); //{arg: false, is: false}
console.log(isTrue(0)); // {arg: 0, is: false}
console.log(isTrue(true)); // {arg: true, is: true}
console.log(isTrue(1)); // {arg: 1, is: true}

```

🔹 A generic type can extend from an interface or a type:

```
type HasID = {
  id: number;
};

const processUser = <T extends HasID>(user: T): T => {
  return user;
};

console.log(processUser({ id: 1, name: 'Vanesa' })); => CORRECT COS IT NEEDS AN ID
console.log(processUser({ name: 'Vanesa'})) => NOT CORRECT

```

### Utility Types

Utility types in TypeScript are predefined type transformations that provide convenient ways to manipulate and transform existing types. They are built-in TypeScript types that help with common type operations and enable you to create more reusable and expressive code.

1. 🔹 Partial<T>: Constructs a type with all properties of T set as optional.

```

interface Person {
  name: string;
  age: number;
  email: string;
}

type PartialPerson = Partial<Person>;

const partialPerson: PartialPerson = {
  name: "John Doe",
};

```

2. 🔹 Readonly<T>: Constructs a type with all properties of T set as readonly.

```

interface Person {
  readonly name: string;
  readonly age: number;
}

const person: Readonly<Person> = {
  name: "John Doe",
  age: 30,
};

// Error: Cannot assign to 'name' because it is a read-only property
// person.name = "Jane Smith";

console.log(person.name); // Output: John Doe
console.log(person.age); // Output: 30

```

3. 🔹 Required<T>: Constructs a type with all properties of T set as required (even the optional properties!)

```
interface Person {
  name: string;
  age?: number;
  email?: string;
}

type RequiredPerson = Required<Person>;

const requiredPerson: RequiredPerson = {
  name: "John Doe",
  age: 30,
  email: "johndoe@example.com",
};

```

4. 🔹 Record<K, T>: Constructs an object type whose keys are of type K and values are of type T. So, it is used to define an object type with specified keys and values:

```

type Fruit = 'apple' | 'banana' | 'orange';
type Price = number;

const fruitPrices: Record<Fruit, Price> = {
  apple: 0.5,
  banana: 0.3,
  orange: 0.4,
};

console.log(fruitPrices.apple); // Output: 0.5
console.log(fruitPrices.banana); // Output: 0.3
console.log(fruitPrices.orange); // Output: 0.4
```

Another example:

```

const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
}
```

Another example:

```
type Streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes = Record<Streams, number>

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
}

```

So, you can define the type of Incomes as those three strings having a number as a value. This is something you cannot do with index signatures, because it will tell you that the key cannot be a literal type (e.g. [key: `salary`]:number --- this is wrong).

The limitation though, is that you cannot add other key-value pairs as you could with index signatures, as we saw before:

```
interface Student {
  [key: string]: string | number;
  name: string;
  GPA: number;
}
```

Also, if we try to loop through the object, we'll also have a problem unless we use `keyof` again:

```
type Streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes = Record<Streams, number>

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
}

for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes])
}
```

5. 🔹 Extract<T, U>: The extract utility type extracts `a subset of types from a union of types`. It takes two type parameters: the union type and the subset of types to extract. It returns a new union type that only includes the types from the original union that are assignable to the subset.

```
type Union = string | number | boolean;

// Extract the number and boolean types from the union
type Extracted = Extract<Union, number | boolean>;
// Result: Extracted = number | boolean

```

6. 🔹 Pick<T, K>: On the other hand, the pick utility type creates a new type by picking `specific properties from an existing type`. It takes two type parameters: the original type and the names of the properties to pick. It returns a new type that only includes the picked properties from the original type.

```
type Original = { name: string; age: number; isAdmin: boolean };

// Pick specific properties from the original type
type Picked = Pick<Original, "name" | "isAdmin">;
// Result: Picked = { name: string; isAdmin: boolean }

```

Here we want to create a new type 'PersonBasicInfo' that only includes the 'name' and 'age' properties.

7. 🔹 Omit<T, K>: The omit utility type creates `a new type by omitting specific properties from an existing type`. It takes two type parameters: the original type and the names of the properties to omit. It returns a new type that excludes the specified properties from the original type.

```
type Original = { name: string; age: number; isAdmin: boolean };

// Omit specific properties from the original type
type Omitted = Omit<Original, "name" | "isAdmin">;
// Result: Omitted = { age: number }

```

We want to create a new type 'PersonWithoutAddress' that excludes the 'address' property.

8. 🔹 Exclude<T, U>: On the other hand, the exclude utility type creates `a new type by excluding specific types from a union of types`. It takes two type parameters: the union type and the types to exclude. It returns a new union type that excludes the specified types from the original union.

```
type Union = string | number | boolean;

// Exclude specific types from the union
type Excluded = Exclude<Union, number | boolean>;
// Result: Excluded = string

```

9. 🔹 NonNullable<T>: Constructs a type by excluding null and undefined from T.

```
type NullableValue = string | null | undefined;

type NonNullableValue = NonNullable<NullableValue>;
// Result: NonNullableValue = string

```

10. 🔹 ReturnType<T>: Extracts the return type from a function type T.
    It takes a function type as a parameter and returns the type of the value that the function will return when called.

```
function add(a: number, b: number): number {
  return a + b;
}

type AddReturnType = ReturnType<typeof add>;
// Result: AddReturnType = number

```

11. 🔹 Parameters<T>: It takes a function type as a parameter and returns a tuple type containing the types of the function's parameters:

```
type MyFunctionType = (a: string, b: number) => boolean;

type MyParameters = Parameters<MyFunctionType>;
// Result: MyParameters = [string, number]


11. 🔹 Awaited: The awaited utility type is not a built-in type in TypeScript. It is a custom utility type that can be defined to infer the resolved type of a Promise. With the Awaited utility type, you can infer the resolved type of a Promise without explicitly specifying it. Here's an example:

```

async function fetchData(): Promise<string> {
return "data";
}

type ResolvedType = Awaited<ReturnType<typeof fetchData>>;
// ResolvedType is now string

```

In this example, the ResolvedType is inferred as string because the ReturnType utility is used to extract the return type of the fetchData function, and then the Awaited utility type is applied to infer the resolved type of the Promise returned by fetchData.

The awaited utility type can be helpful when working with asynchronous code and you want to infer the resolved type of a Promise dynamically.

## Extension to help you read Typescript errors:

It is called `Pretty Typescript Errors` by "yoavbls" and it wil make complex errors more understandable.

You can also install `Error Lens` by Alexander to see the errors in red next to the line it is located.
```
