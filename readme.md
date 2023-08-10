# Learning TYPESCRIPT ⌨

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

🔹 In TypeScript, `type inference` refers to the compiler's ability to automatically deduce the type of a variable or expression based on its value and context. Instead of explicitly specifying the type of each variable, TypeScript can analyze the code and determine the most appropriate type based on the available information.

For example, if you declare a variable and initialize it with a number, TypeScript will infer that the variable is of type number. Similarly, if you assign a string to another variable, TypeScript will infer that the variable is of type string.

🔴 Careful with the word `any` since it is telling Typescript that it has to ignore the type of your variable (e.g. let anyValue: any = 'hola -- it's not gonna treat anyValue as anything.). Also careful with `unknown`.It is similar to the any type, but with stricter type checking.

👉 It is a good idea to define the type when Typescript tells you to, cos otherwise implicity defines it as 'any'.

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
function sayHi({ name, age}: {name: string, age: number}) {

}
```

Or:

```
function sayHi(person; {name: string, age: number}) {
  const { name, age } = person
}
```

🔹 How to give a type to an arrow function?

```
const add = (a: number, b: number): number => {
  return a + b
}
```

🔹 How to give a type to a function that is a parameter of another function? :

```
const sayHiFromFunction = (fn: (name: string) => void) => {
  fn('John')
}

const sayHi = (name: string) => {
  console.log(`Hola ${name}`)
}

sayHiFromFunction(sayHi)
```

We say 'void' cos the function is not expected to have a 'return' or it doesn't matter if is has it.

🔹`void` is used when a function does not return a value. When a function's return type is specified as void , it means that the function may not return any value or it may return undefined (example, when doing console.log).

🔹`never` is used to represent a type that indicates a value that will never occur. It is typically used in scenarios where a function does not return at all, or when it always throws an error or enters an infinite loop. For example:

```
function throwError(message: string): never {
  throw new Error(message);
}
```

In the above example, the throwError function always throws an error, so its return type is specified as never .

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

### Arrays, Tuples and Objects

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

### Type indexing

1. Index Signatures: Index signatures allow you to define the types of values associated with dynamic keys in an object or dynamic indexes in an array. You can use square brackets [] to define an index signature and specify the type of values associated with the keys or indexes. Here's an example:

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

2. Lookup Types: Lookup types allow you to extract the type of a property from an object based on its key. You can use the keyof operator to create a lookup type.

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

However you can use keywords such as `public`, `readonly`, `private` or `protected` not to be so redundant:

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

- Public: a public property is a member variable or attribute of a class that can be accessed and modified from outside the class.

- Private: a member variable or attribute of a class that can only be accessed and modified within the class itself. However, it could be accessed through a method:

```
 public getAge() {
        return `Hello, I'm ${this.age}`
    }

const Vanesa = new Coder('Vanesa', 'Indie', 36)
console.log(Vanesa.getAge())  // `Hello, I'm 36`
```

- Readonly: can only be read and not modified after it is initialized.

- Protected: a member variable or attribute of a class that can be accessed and modified within the class itself and its subclasses. It is declared with the "protected" access modifier, which restricts its visibility to the class and its subclasses. Protected properties are not accessible by other parts of the program that are not subclasses of the class that defines them. This allows for more control over data access and manipulation within a class hierarchy.

- Definite Assignment Assertion Operator: allows developers to explicitly inform the compiler that a variable has been assigned a value, even if the compiler is unable to detect it. It is denoted by the "!" symbol placed after the variable name. This can be useful in situations where the compiler is unable to infer the assignment due to complex control flow or conditional logic. However, it is important to use this operator with caution, as it bypasses the compiler's type checking and can potentially lead to runtime errors if the variable is not actually assigned a value.

## Extension to help you read Typescript errors:

It is called `Pretty Typescript Errors` by "yoavbls" and it wil make complex errors more understandable.

You can also install `Error Lens` by Alexander to see the errors in red next to the line it is located.
