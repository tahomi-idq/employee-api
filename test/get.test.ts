import { describe, it, beforeEach, before, skip, after } from "node:test";
import { reloadBd, api } from "./test-base.test";

describe("GET /api/employee",()=>{
    before(reloadBd)

    const endPoint = "/api/employee";
    const token = "bb21b216a5d4b1eced4b4d528c89a7bcb2cc0375ecb83a8319fdf98eac1d1913cd8ee740e28413640d5a4a91aab96b893e7c26b084578a971c6bda2eb8323f58";
    let nameRequest = {
        "name": "Abhishek"
    };

    it("should fail without auth", async ()=>{
        const response = await api.get(endPoint).send(nameRequest);
                
        console.log(response.body);
    })

    it("should return employee", async ()=>{
        const response = await api.get(endPoint).set("Authorization", token).send(nameRequest);
                
        console.log(response.body);
    })
})