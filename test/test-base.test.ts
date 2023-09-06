import request from "supertest";
import fs from "fs";

export const api = request("http://localhost:5000");
export const token = "bb21b216a5d4b1eced4b4d528c89a7bcb2cc0375ecb83a8319fdf98eac1d1913cd8ee740e28413640d5a4a91aab96b893e7c26b084578a971c6bda2eb8323f58";
export function reloadBd() {
    const bdDir = __dirname + "/../db" + "/db-data.json";
    const origin = __dirname + "/../db" + "/db-data-default.json";

    fs.writeFileSync(bdDir, fs.readFileSync(origin));
}