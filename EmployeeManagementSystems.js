class Employee{
    constructor(id, name,basicsalary){
        this.id = id;
        this.name = name;
        this.basicsalary = basicsalary;
    }

    calculateSalary(){
    return this.basicsalary;
    }
    displayInfo(){
    console.log("Employee ID:"+this.id);
    console.log("Employee Name:"+this.name);
    console.log("Employee Basic Salary:"+this.basicsalary);       
    }
}

// const emp1 = new Employee(1, "Mohsin", 50000);
// emp1.displayInfo();

class PermanentEmployee extends Employee{
    calculateSalary(){
        return this.basicsalary + (this.basicsalary *20/100);

    }
}

class ContractualEmployee extends Employee{
    calculateSalary(){
        return this.basicsalary + 5000;
    }
}

//Object 
const emp1 = new PermanentEmployee(1, "Mohsin", 50000);
const emp2 = new ContractualEmployee(2, "Ali", 40000);

console.log("===Permanent Employee===");
emp1.displayInfo();
console.log("Calculated Salary:", emp1.calculateSalary());
console.log("===Contractual Employee===");
emp2.displayInfo();
emp2.calculateSalary();
console.log("Calculated Salary:", emp2.calculateSalary());

function* employeeGenerator(employees) {
    for (let emp of employees) {
        yield {
            id: emp.id,
            name: emp.name,
            salary: emp.calculateSalary()
        };
    }
}

const employees = [emp1, emp2];
const gen = employeeGenerator(employees);
console.log("\n=== Using Generator ===");
for (let record of gen) {
    console.log(`Employee ID: ${record.id}, Name: ${record.name}, Salary: ${record.salary}`);
}









