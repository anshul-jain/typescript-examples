// Code goes here!
class Department {
   // public name: string; // Short hand con
    private employees: string[] = []; // Private access modifier

    constructor(private id: string, public name: string) { // Short hand constructor 
        //this.name = n;
    }
    // constructor(private readonly id: string, public name: string) { // "readonly" is typescript properties making field to initialize onces only i.e you can only have attribute value set only "once".
    //     //this.name = n;
    // }

    describe(this: Department) {
        console.log(`Department:  + ${this.id}: ${this.name}`);
    }

    addEmployee(employee: string) {
        // validation etc
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('D1', 'Accounting');

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

// accounting.employees[2] = 'Anna';

accounting.describe();
accounting.name = 'NEW NAME';
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();
