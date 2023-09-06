import http, { IncomingMessage } from 'http';
import { generateAuthToken } from './auth/authController';

const server = http.createServer(async (req, res)=>{

    res.setHeader('Content-Type', "application/json");

    if(req.url === "/auth" && req.method === "GET") {
        try {

            res.write(JSON.stringify({
                token: await generateAuthToken(req)
            }))
            res.statusCode = 200;
            
        } catch(e) {

            res.statusCode = 400;
            let errorMessage = `Invalid request. Must be in request body: {key: [your-api-key]}`;

            if(e instanceof Error) {
                errorMessage = e.message;
            }

            console.log(e);
            
            res.write(JSON.stringify({
                message: errorMessage,
            }))
        }
    } else {
        res.statusCode = 404;
            
        res.write(JSON.stringify({
            message: "Page not found",
        }))
    }

    res.end();
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, ()=>{
    console.log(`server started on port ${PORT}`);
});