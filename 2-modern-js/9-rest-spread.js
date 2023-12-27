const [first, ...restOfItems] = [10, 20, 30, 40];

const data = {
  temp1: "001",
  temp2: "002",
  firstName: "John",
  lastName: "Doe",
};

const { ...person } = data;

const newArray = [...restOfItems];

const newObject = {
  ...person,
};

console.log(person);
