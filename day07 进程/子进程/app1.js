const child_process = require('child_process')

function createProcess() {
    let child = child_process.spawn('node', ['./server.js'])

    child.stdout.on('data', data => {
        console.log(data.toString())
    })

    child.stderr.on('data', error => {
        console.log(error.toString())
    })
    return child
}

let child = createProcess()

const fs = require('fs')

const watcher = fs.watch('./server.js')




watcher.on('change', () => {
    // console.log('server 改变了！')
    // 改变杀掉子进程
    child.kill()
    // 重新启动子进程
    child = createProcess()

})


