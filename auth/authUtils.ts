import { IncomingMessage } from "http";
import fs from "fs"
import { getBody } from "../http/utils";
import crypto from "crypto";

export async function readAuth(request: IncomingMessage):Promise<AuthData> {

    let data = JSON.parse(await getBody(request));

    if(data === null) {
        throw new Error("No data provided")
    }

    return {
        key: data.key
    };
}

export function getApiKeys():string[] {
    return fs.readFileSync(__dirname + '/api-keys.txt', 'utf-8').split(/\r?\n/);
}

let salt = process.env.SALT || "salt"

export function encodeKey(key:string):string {

    return crypto.pbkdf2Sync(key, salt, 7, 64, 'sha512').toString('hex');
}

export interface AuthData {
    key:string;
}