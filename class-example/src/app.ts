// Code goes here!
class Department {
    public name: string; // Public access modifier
    private employees: string[] = []; // Private access modifier

    constructor(n: string) { // Constructor
        this.name = n;
    }

    describe(this: Department) {
        console.log('Department: ' + this.name);
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

const accounting = new Department('Accounting');

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

// accounting.employees[2] = 'Anna';

accounting.describe();
accounting.name = 'NEW NAME';
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();
