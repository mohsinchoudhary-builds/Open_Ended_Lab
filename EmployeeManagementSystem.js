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
    comsole.log("Employee Basic Salary:"+this.basicsalary);       
    }
}

const emp1 = new Employee(1, "Mohsin", 50000);
emp1.displayInfo();

