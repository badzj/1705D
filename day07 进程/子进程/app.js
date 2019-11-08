// const child_process = require('child_process')

// // 主进程ID
// console.log(process.pid)

// // 创建子进程
// const child = child_process.exec('node child.js', (error, stdout, stderr) => {
//     if (error) throw error
//     console.log('stdout', stdout)
//     console.log('stderr', stderr)
// })

// // 子进程ID
// console.log(child.pid)




const child_process = require('child_process')

const child = child_process.spawn('node', ['./server.js'])


// fs.watch()

child.stdout.on('data', data => {
    console.log('stdout', data.toString())
})

child.stderr.on('data', error => {
    console.log('error', error.toString())
})