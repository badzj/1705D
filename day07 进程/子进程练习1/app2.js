const child_process = require('child_process')

const fs = require('fs')

const watcher = fs.watch('./server.js')

let child = createChild()

function createChild() {
    let child = child_process.spawn('node', ['./server.js'])

    child.stdout.on('data', data => {
        console.log(data.toString())
    })

    child.stderr.on('data', error => {
        console.log(error.toString())
    })

    return child
}


watcher.on('change', () => {
    child.kill()
    child = createChild()
})


