const http = require('http')

const server = http.createServer((req, res) => {
    
    if (req.url === '/login') {
        let bufArr = []
        req.on('data', chunk => {
            bufArr.push(chunk)
        })

        req.on('end', () => {
            let buf = Buffer.concat(bufArr)
            console.log(buf.toString())
            req.body = buf
        })
    }

})

server.listen(9090, () => {
    console.log('服务器启动成功 9090')
})