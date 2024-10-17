var employee = /** @class */ (function () {
    function employee(empId, empMail, empPass, department, salary) {
        this.empId = empId;
        this.empMail = empMail;
        this.empPass = empPass;
        this.department = department;
        this.salary = salary;
    }
    return employee;
}());
var emp = [];
function addEmp(empId, empMail, empPass, department, salary) {
    if (emp.some(function (e) { return e.empId === empId; })) {
        throw new Error("empID already exist");
    }
    var newEmp = new employee(empId, empMail, empPass, department, salary);
    emp.push(newEmp);
}
try {
    addEmp(1, "john.doe@example.com", "password123", "HR", 50000);
    addEmp(2, "jane.smith@example.com", "password456", "IT", 75000);
    addEmp(3, "mike.jones@example.com", "password789", "HR", 52000);
    addEmp(4, "sarah.lee@example.com", "password321", "Finance", 65000);
    addEmp(5, "emma.johnson@example.com", "password654", "IT", 80000);
    // Attempting to add duplicate empId
    addEmp(3, "duplicate.john@example.com", "password", "Finance", 60000); // This will throw an error
}
catch (error) {
    console.error(error.message);
}
// Function to find employees by department
function findEmployeesByDepartment(department) {
    return emp.filter(function (e) { return e.department === department; });
}
// Function to calculate total salary of a department
function calculateTotalSalaryByDepartment(department) {
    var deptEmployees = findEmployeesByDepartment(department);
    return deptEmployees.reduce(function (total, emp) { return total + emp.salary; }, 0);
}
// Example usage
var itEmployees = findEmployeesByDepartment("IT");
itEmployees.map(function (e) { return console.log(e); });
var totalITSalaries = calculateTotalSalaryByDepartment("IT");
console.log("Total salaries in IT department:", totalITSalaries);
