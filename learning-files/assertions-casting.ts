//Type assertions (can be done with the as keyword or with angle brackets)

////////////REMEMBER that angle brackets cannot be used in TSX (in React)

//AS:

type One = string;

type Two = string | number;

type Three = "hello";

//converting to more or less specific
let a: One = "hello";

let b = a as Two;

let c = a as Three;

b = 5;

console.log(a);
console.log(b);
console.log(c);

//Angle brackets

let d = <One>"hello";
let e = <string | number>"hello";

console.log(d);
console.log(e);

//example in functions:

const addOrConcat = (a: number, b: number, c: "add" | "concat") => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(1, 2, "concat") as string;
// if we don't put as string, TS will throw an error.

console.log(myVal);

//look:

let me = "" + 1 + 2; // type is automatically inferred as string
console.log(me); //12

//CAREFUL cos TS lets you do this!!! :
//Assertions let mistakes
let mes: number = addOrConcat(2, 2, "concat") as number;

//Forced casting or double casting (two assertions)
10 as unknown as string;

//DOM

const img = document.querySelector("img")!; //with the exclamation we are saying 'img' can't be null

img.src; //no error!

const img2 = document.getElementById("img") as HTMLImageElement; // because it doesn't even know what element it is

img2.src; //no error!

//also, but not in TSX:

const img3 = <HTMLImageElement>document.getElementById("img");
img3.src;

//YEAR EXERCISE:

// my try (worked too)

// let year = document.getElementById("year")! as HTMLElement;
// let thisYear = new Date().getFullYear() as unknown as number;
// year.setAttribute("data-year", thisYear.toString());
// year.textContent = thisYear.toString();

//solution:

const year = document.getElementById("year") as HTMLSpanElement;
const thisYear: string = new Date().getFullYear() as unknown as string; //or .toString()
year.setAttribute("data-year", thisYear);
year.textContent = thisYear;
