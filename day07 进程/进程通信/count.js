let startTime = Date.now()
let sum = 0
for (let i=0; i<20000000; i++) {
    sum += i
}
let endTime = Date.now()
let timer = endTime - startTime + ''

// 这里的process是子进程
process.send(timer)

// 接收父进程发送的消息
process.on('message', msg => {
    console.log(msg)
})