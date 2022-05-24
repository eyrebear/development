//create empty array named employees
var employees = []
//create Employee constructor, fourth defaulted to "Full Time"
function Employee(name, jobTitle, salary){
    this.Name = name
    this.JobTitle = jobTitle
    this.Salary = salary
    this.Status = "Full Time"
    //this.employeeForm = this.employeeForm //don't need anything in the form for this function
}
//constructor's prototype method that prints employee info to console
Employee.prototype.printEmployeeForm = function (string){
    console.log(string)
}

//#1 instantiate 3 employees
var james = new Employee("James", "Engineer", 100000)
var ben = new Employee("Ben", "Janitor", 40000)
var penelope = new Employee("Penelope", "V School TA", 55000)
//#2 override status of one employee to either "Part Time" or "Contract"
penelope.Status = "Contract"
//console.log(Employee) early tests
//console.log(ben)      early tests

//#3 call the printEmployeeForm function for each employee
james.printEmployeeForm(james)
ben.printEmployeeForm(ben)
penelope.printEmployeeForm(penelope)

//#4 put the generated employees into the employees array
var newEmployees = [james, ben, penelope]
var employees = employees.concat(newEmployees)
//employees.push(newEmployees)  // ended up with a nested array this way
//checking my employees array
console.log("---------CHECKING EMPLOYEES ARRAY--------")
console.log(employees)

// function Car(make, model, year){
//     this.make = make
//     this.model = model
//     this.year = year
// }


// var jeep = new Car("Jeep", "Cherokee", 1995)

// console.log(jeep)
// console.log(Car)