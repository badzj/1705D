const express = require('express')
var bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.post('/login', (req, res) => {

    console.log(req.body.leixing)
    res.send(213)
})

app.listen(9090)