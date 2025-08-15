const EventEmmiter = require('events')

const customEmitter = new EventEmmiter();

customEmitter.on('respond', () => {
    console.log(`data received`);
})

customEmitter.on('respond', () => {
    console.log(`woilah wak`);
})

customEmitter.emit('respond')


// const http = require('http')

// const server = http.createServer()

// server.on('request', (req, res) => {
//     res.end('welcome')

// })

// server.listen(5000)