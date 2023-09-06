import { describe, it, beforeEach, before, skip, after } from "node:test";
import { getAllEmployees } from "../db/dbController";
import { reloadBd, api, token } from "./test-base.test";

//Удаление
describe("DELETE /api/employee",()=>{

    before(reloadBd)

    const endPoint = "/api/employee";

    let deleteRequest = {
        "name": "Anurag"
    }

    it("should add new employee", async ()=>{
        console.log("Before adding", getAllEmployees().length);
        const response = await api.delete(endPoint).set("Authorization", token).send(deleteRequest);
        console.log("After adding", getAllEmployees().length);
        console.log("deletion:", response.body);
    })

    after(reloadBd)
})