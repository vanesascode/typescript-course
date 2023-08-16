//PARTIAL

interface Person {
  name: string;
  age: number;
  email: string;
}

type PartialPerson = Partial<Person>;

const partialPerson: PartialPerson = {
  name: "John Doe",
};

////////////////////////////////////////////////////
interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "compsci123",
  title: "Final Project",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 95 }));
//{studentId: 'compsci123', title: 'Final Project', grade: 95}
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });

//REQUIRED & READONLY

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // send to database, etc.
  return assign;
};

const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};

//Cannot assign to 'verified' because it is a read-only property:
//assignVerified.verified = false;

//We added all the required properties:
recordAssignment({ ...assignGraded, verified: true });

//REturnType:

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign("Utility Types", 100);

// PArameters:

type MathOperation = (a: number, b: number, ...rest: number[]) => number;

type OperationParameters = Parameters<MathOperation>;

function performOperation(
  operation: MathOperation,
  ...operands: OperationParameters
): number {
  return operation(...operands);
}

function add(a: number, b: number, ...rest: number[]): number {
  return a + b + rest.reduce((sum, num) => sum + num, 0);
}

const operationParams: OperationParameters = [2, 3, 4, 5];
const result = performOperation(add, ...operationParams);

console.log(result); // Output: 14

// Awaited - helps us with the ReturnType of a Promise

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((users) => console.log(users));
