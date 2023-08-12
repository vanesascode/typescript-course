//Functions with returns
const add = (a: number, b: number): number => {
  return a + b;
};

//functions with no return

const logMsg = (msg: any): void => {
  console.log(msg); //this is just a side effect
};

logMsg("Hello, world!");
logMsg(add(2, 2));
logMsg(add(2, "2")); //not liked

// They are the same:
const substract = (a: number, b: number): number => {
  return a - b;
};

let substract2 = function (a: number, b: number): number {
  return a - b;
};

//TYPE

type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = function (c, d) {
  return c * d;
};
logMsg(multiply(2, 2));

//INTERFACE (although type is prefered)
interface mathFunction2 {
  (a: number, b: number): number;
}

//optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (c) {
    return a + b + c;
  }
  return a + b;
};
console.log(addAll(2, 2));
console.log(addAll(2, 2, 3));

//default values
const sumAll = (a: number, b: number, c: number = 0): number => {
  return a + b + c;
};
console.log(sumAll(2, 2));

//but look:
const sumAll2 = (a: number = 10, b: number, c: number = 0): number => {
  return a + b + c;
};
console.log(sumAll2(undefined, 2));

//Rest parameters represent an indefinite number of arguments as an array.
const total = (a: number, ...numbers: number[]): number => {
  return a + numbers.reduce((acc, curr) => acc + curr, 0);
};
//The initial value for the reduce method is set to 0, meaning the accumulation starts from 0.

//Instead of the type Error, you could put "never"
const createError = (message: string): Error => {
  throw new Error(message);
};

//if the if conditional wasn't there, the type of the function wouldn't be "void" but "never"
const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 1000) {
      break;
    }
  }
};

///////

const numberOrString = (value: number | string): string => {
  if (typeof value === "number") {
    return "number";
  } else {
    return "string";
  }
};

console.log(numberOrString(5));

/////

const isNumber = (value: any): boolean => {
  return typeof value === "number";
};

console.log(isNumber(5)); //true
