const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};

console.log(isTrue(false)); //{arg: false, is: false}
console.log(isTrue(0)); // {arg: 0, is: false}
console.log(isTrue(true)); // {arg: true, is: true}
console.log(isTrue(1)); // {arg: 1, is: true}
console.log(isTrue("Dave")); // {arg: "Dave", is: true}
console.log(isTrue("")); // {arg: "", is: false}
console.log(isTrue(null)); // {arg: null, is: false}
console.log(isTrue(undefined)); // {arg: undefined, is: false}
console.log(isTrue({})); //   {arg: {}, is: false}
console.log(isTrue({ name: "Dave" })); // {arg: { name: "Dave" }, is: true}
console.log(isTrue([])); //   {arg: [], is: false}
console.log(isTrue([1, 2, 3])); //   {arg: [1, 2, 3], is: true}
console.log(isTrue(NaN)); //   {arg: NaN, is: false}
console.log(isTrue(-0)); //   {arg: -0, is: false}

// The code snippet  !Object.keys(arg as keyof T).length  is checking if the object  arg  has any keys.
// 1.  Object.keys(arg as keyof T)  retrieves an array of keys from the  arg  object. The  as keyof T  syntax is used to inform TypeScript that  arg  should be treated as a key of type  T .
// 2.  .length  is used to get the number of keys in the array.
// 3. The  !  operator negates the truthiness of the expression. So,  !Object.keys(arg as keyof T).length  will evaluate to  true  if  arg  has no keys (empty object), and  false  if  arg  has any keys.

//The  !!arg  expression is a common technique in JavaScript/TypeScript to convert a value to its corresponding boolean representation. It ensures that the  is  property will always be a boolean value ( true  if  arg  is truthy,  false  if  arg  is falsy).

////////////////////////////////////

//This is with an interface:

interface BoolCheck<T> {
  value: T;
  is: boolean;
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg };
};

// Generic extending from an interface (or it could be a type alias as well)

interface HasID {
  id: number;
}

const processUser = <T extends HasID>(user: T): T => {
  // process the user with logic here
  return user;
};

console.log(processUser({ id: 1, name: "Vanesa" }));
//console.log(processUser({ name: 'Vanesa'}))

////////////////////////////////////////continuation:

const getUsersProperty = <T extends HasID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};

const usersArray = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];

console.log(getUsersProperty(usersArray, "email")); // ['Sincere@april.biz', 'Shanna@melissa.tv']
console.log(getUsersProperty(usersArray, "username")); //['Bret', 'Antonette']

///////////////////////////////////////////

//with a class:

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

///////////////////////////////////

class StateObject<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    return this.data;
  }

  set state(value: T) {
    this.data = value;
  }
}

const store = new StateObject("John");
console.log(store.state);
store.state = "Vanesa";
//store.state = 12  => error because the type string was already inferred when passing a string.

const myState = new StateObject<(string | number | boolean)[]>([15]);
myState.state = ["Vanesa", 42, true];
console.log(myState.state);
