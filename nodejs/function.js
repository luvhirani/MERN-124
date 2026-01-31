// function sum(a,b,c=0,d=0){
//     return a+b+c+d;
// }

// function sub(a,b){
//     return a-b;
// }

// console.log(sum(2,3))

// module.exports = {sum,sub};

// cjs, mjs

// modules/package 
// user-defined
//  External

// Internal -> os, fs, path, event, http

// const os = require("os")

// console.log(os.cpus())
// console.log(os.freemem())
// console.log(os)

// const fs = require("fs")
// fs.writeFileSync("index.txt", "Hello World")
// console.log(typeof fs)
// console.log(fs.readFileSync("index.txt","utf8"))
// fs.unlinkSync("index.txt")

const http = require("http")

const server = http.createServer((req,res)=>{
    console.log("Request:",req.url)
    // res.end("This is reponse from PORT 3000")
    if(req.url == "/" && req.method == "GET"){
        res.end("This is Home Page")
    }
    else if(req.url == "/users" && req.method == "GET"){
        res.end("These are list of users")
    }
    else if(req.url == "/sellers" && req.method == "GET"){
        res.end("These are list of sellers")
    }
    else{
        res.end("Invalid request")
    }
})

let PORT = 3000

server.listen(PORT,"localhost",()=>{
    console.log("Server has been started")
})

// PORT = 65500