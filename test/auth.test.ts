import { describe, it } from "node:test";
import { api } from "./test-base.test";

//Аутентификация и авторизация
describe("GET /auth",()=>{
    let data = {
        "key": "key-one"
    }

    let fakeData = {
        "key": "fake"
    }

    it("should return token", async ()=>{
        const response = await api.get("/auth").send(data);
                
        console.log(response.body);
    })

    it("should not return token", async ()=>{
        const response = await api.get("/auth").send(fakeData);
                
        console.log(response.body);
    })
})