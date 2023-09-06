import { describe, it, before, after } from "node:test";
import { getAllEmployees } from "../db/dbController";
import { reloadBd, api, token } from "./test-base.test";

//Изменение
describe("PATCH /api/employee",()=>{

    before(reloadBd)

    const endPoint = "/api/employee";

    let editRequest = {
        "employee": {
            "name": "Himanshu",
            "salary": 3000,
            "currency": "USD",
            "department": "Engineering",
            "sub_department": "Platform",
            "on_contract": true
        }
    }

    it("should edit employee", async ()=>{
        console.log("before edit", getAllEmployees());
        
        const response = await api.patch(endPoint).set("Authorization", token).send(editRequest);
        console.log("after edit", getAllEmployees());
        console.log("employee:", response.body);
        
    })

    after(reloadBd)
})


