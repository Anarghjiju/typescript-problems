class employee{
    empId : number;
    empMail:string;
    empPass: string;
    department: string;
    salary: number;

    constructor(empId : number,
        empMail:string,
        empPass: string,
        department: string,
        salary: number){
            this.empId = empId;
            this.empMail = empMail;
            this.empPass = empPass;
            this.department = department;
            this.salary = salary;
        }
}

let emp:employee[] = [];

function addEmp(empId : number,
    empMail:string,
    empPass: string,
    department: string,
    salary: number){

        if(emp.some(e => e.empId === empId)){
            throw new Error("empID already exist");
        }

        const newEmp = new employee(empId,empMail,empPass,department,salary);
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
    } catch (error) {
        console.error(error.message);
    }  
    
    
// Function to find employees by department
function findEmployeesByDepartment(department: string): employee[] {
    return emp.filter(e => e.department === department);
}

// Function to calculate total salary of a department
function calculateTotalSalaryByDepartment(department: string): number {
    const deptEmployees = findEmployeesByDepartment(department);
    return deptEmployees.reduce((total, emp) => total + emp.salary, 0);
}

// Example usage
const itEmployees = findEmployeesByDepartment("IT");
itEmployees.map(e => console.log(e));

const totalITSalaries = calculateTotalSalaryByDepartment("IT");
console.log("Total salaries in IT department:", totalITSalaries);

