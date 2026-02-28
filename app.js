const express = require('express')
const { exec } = require('child_process')
const app = express()

// ❌ Command Injection
app.get('/cmd', (req, res) => {
    const userInput = req.query.input
    exec(userInput, (err, stdout, stderr) => {
        res.send(stdout)
    })
})

// ❌ Hardcoded Secret
const API_KEY = "SUPER_SECRET_API_KEY_12345"

app.listen(3030, () => {
    console.log("App running on port 3030")
})