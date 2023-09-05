const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({
        mesg: 'hello backend 222'
    })
})

app.listen(3000)