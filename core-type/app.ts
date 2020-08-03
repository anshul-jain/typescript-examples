function add(num1: number, num2: number) {
    /*if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw Error("Invalid type");
    } */ 
    // Java script type to ensure we are passing correct type of parameter. TS provide a better way to check the things in the development time
    // if.e staic way to anaylsis the things unlike the Javascript which decide at runtime.
    return num1 + num2;
}
const number1 = '10'; // Editor and compiler reports its error to fix, but it doesn't stop you to create the js file.
const number2 = 20.2;

const result = add(number1, number2);
console.log(result);
