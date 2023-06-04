const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url=="/")
    {
        res.end("HOME PAGE")
        return
    }
    else if(req.url=="/about")
    {
        res.end("ABOUT")
        return
    }
    res.end(
    `<h1>PAGE NOT FOUND</h1>
    <p>Please go back </p>
    <a href = "/">Back </a>`)
})

server.listen(5000)