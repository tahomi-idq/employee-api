import { IncomingMessage } from "http";

export function getBody(request:IncomingMessage):Promise<string> {
    return new Promise((resolve) => {
      const bodyParts:any = [];
      let body;
      request.on('data', (chunk) => {
        bodyParts.push(chunk);
      }).on('end', () => {
        body = Buffer.concat(bodyParts).toString();
        resolve(body)
      });
    });
  }