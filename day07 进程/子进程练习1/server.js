
const http = require('http')

const fs = require('fs')

const server = http.createServer((req, res) => {
    if (req.url === '/json') {
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify({
            code: 0,
            list: ['this', 'is', 'json']
        }))
    }
    if (req.url === '/txt') {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('this is txt11111111111')
    }
    if (req.url === '/jpg') {
        res.writeHead(200, { 'Content-Type': 'image/jpeg' })
        const img = fs.readFileSync('./1.jpg')
        res.end(img)
    }
})

server.listen(process.env.PORT || 3000, () => {
    console.log(`服务器启动成功端口号为: ${process.env.PORT || 3000}`)
})

