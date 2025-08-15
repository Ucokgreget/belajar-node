const http = require('http')

const server = http.createServer((req, res) => {

    if(req.url === '/'){
        res.end("Halo ini adalah web pertama saya!")
    }
    else if(req.url === '/about'){
        res.end("Ini adalah tentang kami")
    }
    else{
        res.end(`
        <h1>Ups!</h1>
        <p>Lu salah masuk kayaknya</p>
        <a href="/">Kembali ke home</a>
        `)
    }
    
    

})

server.listen(5000)