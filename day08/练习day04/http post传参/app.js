const fs = require('fs')

const child_process = require('child_process')

let childProcess = child_process.spawn('node', ['./server.js'])

childProcess.stdout.on('data', data => {
    // 返回的是 流
    console.log('stdout-----', data.toString())
})

childProcess.stderr.on('data', err => {
    console.log('stdout-----', err.toString())
})

const watcher = fs.watch('./server.js')

watcher.on('change', () => {
    childProcess.kill()
    childProcess = child_process.spawn('node', ['./server.js'])
})