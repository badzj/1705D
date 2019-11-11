const Koa = require('koa')

const app = new Koa()

const Router = require('koa-router')

const router = new Router()

const bodyParser = require('koa-bodyparser')

const query = require('./db/query')

const static = require('koa-static')

const path = require('path')

app
  .use(static(path.join(process.cwd(), 'public')))
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

router.get('/api/list', async (ctx, next) => {
  console.log(ctx.request.query)
  ctx.response.body = 'Hello World!'
})

router.post('/api/login', async (ctx, next) => {
  const {username, password} = ctx.request.body
  const result = await query('select * from userlist')
  ctx.body = result
})

app.listen(process.env.PORT || 9090, () => {
  console.log(`服务器启动成功，端口号为：${process.env.PORT || 9090}`)
})





// app.use(async (ctx, next) => {
//     // console.log(ctx.request)
//     // console.log(ctx.response)
//     console.log(ctx.path)
//     console.log(ctx.url)
//     ctx.body = 'hello world!'
// })

// app.use(async (ctx, next) => {
//     const startTime = Date.now()
//     console.log('洋葱圈模型第一层开始')
//     await next()
//     console.log('洋葱圈模型第一层结束')
//     const endTime = Date.now()
//     const timer = endTime - startTime 
//     ctx.body = `用时：${timer}`
// })

// app.use(async (ctx, next) => {
//     console.log('洋葱圈模型第二层开始')
//     await next()
//     console.log('洋葱圈模型第二层结束')
// })

// app.use(async (ctx, next) => {
//     console.log('洋葱圈模型第三层开始')
//     await next()
//     console.log('洋葱圈模型第三层结束')
// })




