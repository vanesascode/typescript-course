//literal types:

let myname = "John";
// myname = "Jane";   --- not liked

type username = "Amy" | "Jane" | "Jane Doe";

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

let jp: Guitarist = {
  name: "John Doe",
  active: true,
  albums: ["I", "II", "IV"],
};

const greetGuitarist = (guitarist: Guitarist) => {
  return `Hello ${guitarist.name}`;
};

console.log(greetGuitarist(jp));

//HOWEVER::::::::::::

type UserId = stringOrNumber;

interface PostId = stringOrNumber;  //you cannot do this with interfaces.

//Interfaces: think of them more like objects or classes.

// Type: Aliases for any type of typescript type that we might assign.
