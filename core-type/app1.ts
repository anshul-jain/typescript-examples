function add(num1: number, num2: number, showResult: boolean, resultParse: string) {
    const result = num1 + num2;
    if (showResult) {
        console.log(result + num1 + num2)
    } else {
        return result;
    }

}
const num1 = 10; // Editor and compiler reports its error to fix, but it doesn't stop you to create the js file.
const num2 = 20.2;
const showResult = true;
const resultParse = 'Result is :'

add(num1, num2, showResult, resultParse);

