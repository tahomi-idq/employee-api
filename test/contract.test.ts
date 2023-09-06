import { describe, it, beforeEach, before, skip, after } from "node:test";
import { reloadBd, api, token } from "./test-base.test";

describe("GET /api/contract",()=>{

    before(reloadBd)

    const endPoint = "/api/contract";

    it("should add new employee", async ()=>{
        const response = await api.get(endPoint).set("Authorization", token);
        console.log("Employees: ", response.body);
    })

    after(reloadBd)
})