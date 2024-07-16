const http =require('http');
const fs =require('fs');
const url = require('url');
const path =require('path');

const server = http.createServer((req,res) => {

    console.log("Requests are being sent");

    res.setHeader("Content-Type","text/html");
    res.statusCode = 200;

    fs.readFile('./index.html',(err,data) =>{
        if(err){
            console.log(err);
        }
        res.Write(data);
        // res.end(data);
    })

})

server.listen(4000, 'localhost',() =>{
    console.log('listenning to the requestson port 4000');
}
);