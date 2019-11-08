const cluster = require('cluster')

const cpuLen = require('os').cpus().length 

const http = require('http')

// 判断是否是主进程
if (cluster.isMaster) {
    // 根据cpu个数，创建子进程
    for (let i=0; i<cpuLen; i++) {
        cluster.fork()
    }
} else {
    // 子进程，创建服务器，所有的子进程共享一个服务器
    http.createServer((req, res) => {
        res.end('ok')

    }).listen(process.env.PORT || 3000, () => { 
        console.log(`服务器启动成功，端口号：${process.env.PORT || 3000}`)
    })
}

// 进程守护
cluster.on('exit', worker => {
    console.log(`工作进程 ${worker.process.pid}已退出`)
    cluster.fork() // 退出进程后，再创建一个进程
})