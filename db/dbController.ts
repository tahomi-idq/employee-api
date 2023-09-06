import { Currency } from "../entities/currency";
import { Department } from "../entities/department";
import { Employee } from "../entities/employee";
import { SubDepartment } from "../entities/subDepartment";
import fs from "fs";

const DATA_PATH = __dirname+"/db-data.json";

export function getEmployee(name: string):Employee|undefined {
    return getAllEmployees().find(emp => emp.name === name);
}

export function getAllEmployees():Employee[] {
    return JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
}

function writeNewData(employees:Employee[]):void {
    fs.writeFileSync(DATA_PATH, JSON.stringify(employees));
}

export function addEmployee(employee: Employee):Employee {

    let employees = getAllEmployees();

    if(employees.some((empl)=>empl.name === employee.name)) {
        throw new Error(`Employee with name ${employee.name} already exists`);
    }

    employees.push(employee);
    writeNewData(employees);

    return employee;
}

export function editEmployee(newEmployee: Employee):Employee {
    let employees = getAllEmployees();

    employees = employees.map((employee)=>{
        if(employee.name === newEmployee.name) {
            return newEmployee;
        }

        return employee;
    })

    writeNewData(employees);

    return newEmployee;
}

export function deleteEmployee(name: string):boolean {
    let employees = getAllEmployees();

    let newEmployees = employees.filter((empl) => empl.name!==name);

    writeNewData(newEmployees);

    return newEmployees!==employees;
}

export function getWithContract():Employee[] {
    return getAllEmployees().filter(empl => empl.on_contract);
}

export function getByDepartment(department:Department):Employee[] {
    return getAllEmployees().filter(empl => empl.department === department);
}

export function getBySubDepartment(subDepartment:SubDepartment):Employee[] {
    return getAllEmployees().filter(empl => empl.sub_department === subDepartment);
}