import { describe, it, beforeEach, before, skip, after } from "node:test";
import { reloadBd, api, token } from "./test-base.test";

describe("GET /api/sub-department",()=>{

    before(reloadBd)

    const endPoint = "/api/sub-department";

    const data = {
        "subDepartment": "Platform"
    }

    it("should add new employee", async ()=>{
        const response = await api.get(endPoint).set("Authorization", token).send(data);
        console.log("Employees: ", response.body);
    })

    after(reloadBd)
})