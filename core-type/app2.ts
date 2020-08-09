const employee = {
    name: 'ram',
    age: 20
};

console.log(employee.name);

// Type 2, you can explicitly define the object.
const employee1: object = {
    name: 'ram',
    age: 20
}

// Type 3, define the structure by your self
let employee2: {
    name: string;
    age: number;
} = {
    name: 'ram',
    age: 20
}