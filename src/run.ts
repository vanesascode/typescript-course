type Guitarist = {
  name: string;
  active?: boolean;
  albums: (string | number)[];
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
