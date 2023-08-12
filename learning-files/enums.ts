// Enums provide a way to define a set of named constants, which can be useful for representing a fixed set of values or options in your code.

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

const myDirection: Direction = Direction.Up;
console.log(myDirection); // Output: 0 (Index of 'Up' in the enum)

///////////////////////////////////////

enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

const myColor: Color = Color.Green;
console.log(myColor); // Output: "GREEN"

///////////////////////////////////////////

enum Size {
  Small = 1,
  Medium = getSize("medium"),
  Large = Medium * 2,
}

function getSize(size: string): number {
  if (size === "small") {
    return 2;
  } else if (size === "medium") {
    return 4;
  } else {
    return 8;
  }
}

const mySize: Size = Size.Large;
console.log(mySize); // Output: 8

////////////////////////////////////////////////
