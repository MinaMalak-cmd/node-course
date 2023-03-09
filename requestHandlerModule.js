const fs = require("fs")

const requestHandler = (req,res) => {
    if(req.url === "/"){
        // res.write("Hello")
        res.setHeader('Content-Type','text/html');
        res.statusCode = 302;
        res.write("<html>");
        res.write("<head><title>Hello</title></head>");
        res.write(`<body><form action="/create-user" method="POST"><input type="text" name="username"></input><button type="submit">Send</button></form></body>`);
        res.write("</html>");
        return res.end();
    }
    else if(req.url === "/users"){
        res.write("<html>");
        res.write("<head><title>List of Users</title></head>");
        res.write(`<body> <ul>
                <li>1 out of 3</li>
                <li>2 out of 3</li>
                <li>4 out of 3</li>
        </ul></body>`);
        res.write("</html>");
        return res.end();
    }
    else if(req.url === "/create-user" && req.method === "POST"){
        const body = [];
        req.on('data', (chunck) => {
            body.push(chunck);
        });
        return req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1].replace("+"," ");
            fs.writeFileSync("USERNAME.txt",message);
            res.setHeader('Location','/');
            return res.end();
        });
    }
}

exports.requestHandler = requestHandler;