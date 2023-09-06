import { describe, it, beforeEach, before, skip, after } from "node:test";
import { getAllEmployees } from "../db/dbController";
import { reloadBd, api, token } from "./test-base.test";

//Добавление
describe("POST /api/employee",()=>{

    before(reloadBd)

    const endPoint = "/api/employee";

    let employeeRequest = {
        "employee":{
            "name": "TestName",
            "salary": 3000,
            "currency": "USD",
            "department": "Engineering",
            "sub_department": "Platform",
            "on_contract": true
          }
    }

    it("should add new employee", async ()=>{
        console.log("Before adding", getAllEmployees().length);
        const response = await api.post(endPoint).set("Authorization", token).send(employeeRequest);
        console.log("After adding", getAllEmployees().length);
        console.log("employee:", response.body);
    })

    after(reloadBd)
})