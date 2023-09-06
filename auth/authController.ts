import { IncomingMessage } from "http";
import { encodeKey, getApiKeys, readAuth } from "./authUtils";

export async function generateAuthToken(req: IncomingMessage):Promise<string> {

    let data = await readAuth(req);   

    let key = data.key;

    if (key === undefined || key === null) {
        throw new Error("Key not specified");
    }

    if( ! getApiKeys().includes(key)) {
        throw new Error("Key not found");
    }

    return encodeKey(key);
}

export function verifyKey(token:string|undefined):boolean {

    if(token === undefined) {
        return false;
    }

    let isValid = false

    getApiKeys().forEach(key=>{
        if(encodeKey(key) === token) {
            isValid = true;
        }
    })

    return isValid;
}