const http = require('http');
const fs=require('fs');
var url = require("url");
http.createServer((req, res) => {
    console.log(req.url);
    if(req.url=='/'){
        res.writeHead(200, { 'Content-Type': 'html' });
        res.end(fs.readFileSync("./src/index.html"));
    }else if(req.url=='/add.js'){
        res.end(fs.readFileSync("./src/add.js"));
    }else if(req.url=='/Thumb-es.js'){
        res.end(fs.readFileSync("./src/Thumb-es.js"));
    }else if(req.url=='/PraiseButton'){
        res.end(fs.readFileSync("./src/PraiseButton-es.js"));
    }
  }).listen(3000);