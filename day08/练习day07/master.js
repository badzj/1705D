const http = require('http')

const child_process = require('child_process')

const server = http.createServer()



const cpuLen = require('os').cpus().length 

server.listen(process.env.PORT || 3000, () => {
    console.log(`服务器启动成功，端口号为：${process.env.PORT || 3000}`)
})

let workers = {}

function createProcess() {
    let worker = child_process.fork('./worker.js')

    console.log(worker.pid)
    // 以'server'作为标识，发送server服务器
    worker.send('server', server)
    // 把进程装进对象，以pid当作key
    workers[worker.pid] = worker
    // 捕获异常进程
    worker.on('message', info => {
        console.log('info=========', info)
    })
    // 子进程结束，重启进程
    worker.on('exit', () => {
        delete workers[worker.pid]        
        createProcess()
    })

}

for (let i=0; i<cpuLen; i++) {
    createProcess()
}

// 主进程关闭，杀掉所有子进程
process.on('exit', () => {
    for (let key in workers) {
        workers[key].kill()
    }
})