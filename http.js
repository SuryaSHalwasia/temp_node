
const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("HELLO WORLD")
        return
    }
    if(req.url === '/about'){
        res.end("THIS IS ABOUT SECTION")
        return
    }
    res.end(`
    <h1>Ooops!</h1>
    <p>Page not found</p>
    <a href = "/"> Go back </a>`)
})

server.listen(5000) //arbitrary number