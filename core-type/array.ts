const person = {
    name: 'ram',
    age: 20,
    hobbies: ['Sports', 'gardening']
}
let favActivity: string[];
favActivity = ['aaa']; // Type inference 

for (const hobby of person.hobbies) {
    console.log(hobby); // String operation can be performed on this value.
}