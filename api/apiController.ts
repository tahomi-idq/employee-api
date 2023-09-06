import { ServerResponse, IncomingMessage } from "http";
import { addEmployee, deleteEmployee, editEmployee, getByDepartment, getBySubDepartment, getEmployee, getWithContract } from "../db/dbController";
import { getBody } from "../http/utils";
import { Employee } from "../entities/employee";
import { Department } from "../entities/department";
import { SubDepartment } from "../entities/subDepartment";

export default class ApiController {

    public async processRequest(req:IncomingMessage, res:ServerResponse<IncomingMessage>):Promise<ServerResponse<IncomingMessage>> {

        let {url, method} = req;
        

        try {

            let body;
            
            try {
                body = JSON.parse(await getBody(req));
            } catch (e) {
                body = {};
            }
            
            let getEployeeCondition = url === "/api/employee" && method === "GET";
            let deleteEmployeeCondition = url === "/api/employee" && method === "DELETE";
            let addEmployeeCondition = url === "/api/employee" && method === "POST";
            let editEmployeeCondition = url === "/api/employee" && method === "PATCH";
            let getByDepartmentCondition = url === "/api/department" && method === "GET";
            let getBySubDepartmentCondition = url === "/api/sub-department" && method === "GET";

            if(getEployeeCondition||deleteEmployeeCondition){
                let {name} = body;
    
                if(name === undefined) {
                    throw new Error("Name is not specified");
                }

                if (getEployeeCondition) {
                    
                    res.statusCode = 200;
                    let employee = await getEmployee(name);
                    if(employee === undefined) {
                        res.write(JSON.stringify(null));
                    } else {
                        res.write(JSON.stringify(employee));
                    }
                    
                    return res;
                } else if(deleteEmployeeCondition) {

                    res.statusCode = 200;
                    let employee = await deleteEmployee(name);
                    res.write(JSON.stringify(employee));
                    return res;
                }
            }


            if(addEmployeeCondition || editEmployeeCondition){
                let reqEmployee:Employee = body.employee;

                if(reqEmployee === undefined) {
                    throw new Error("Employee is not specified or invalid");
                }

                if(addEmployeeCondition) {
                    res.statusCode = 200;
                    let employee = await addEmployee(reqEmployee);
                    res.write(JSON.stringify(employee));
                    return res;
                } else if(editEmployeeCondition) {
                    res.statusCode = 200;
                    let employee = await editEmployee(reqEmployee);
                    res.write(JSON.stringify(employee));
                    return res;
                } 
            }

            if(getByDepartmentCondition){
                let department:Department = body.department;

                if(department === undefined) {
                    throw new Error("Department is not specified or incorrect");
                }

                res.statusCode = 200;
                let employees = await getByDepartment(department);
                res.write(JSON.stringify(employees));
                return res;
            }

            if(getBySubDepartmentCondition) {
                let subDepartment:SubDepartment = body.subDepartment;

                if(subDepartment === undefined) {
                    throw new Error("Sub department is not specified or incorrect");
                }
                
                res.statusCode = 200;
                let employees = await getBySubDepartment(subDepartment);
                res.write(JSON.stringify(employees));
                return res;
            } 

            if(url === "/api/contract" && method === "GET") {
                res.statusCode = 200;
                let employees = await getWithContract();
                res.write(JSON.stringify(employees));
                return res;
            }
            
            res.statusCode = 404;
            res.write(JSON.stringify({
                message: "Page not found"
            }))
                
        } catch (e) {
            res.statusCode = 500; //TODO: add 400... errors when data incorrect

            console.log(e);

            let message = "Server error"

            if(e instanceof Error) {
                message = e.message;
            }

            res.write(JSON.stringify({
                message: message
            }))
        }

        return res;
    }
}