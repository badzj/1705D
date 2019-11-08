const child_process = require('child_process')

// 获取主进程ID
console.log(process.pid)

// 创建子进程
const child = child_process.exec('node child.js', (error, stdout, stderr) => {
    if (error) {
        throw error
    }
    console.log('stdout', stdout)
    console.log('stderr', stderr)
})

// 子进程ID
console.log(child.pid)
