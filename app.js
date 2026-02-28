const express = require('express');
const { execFile } = require('child_process');

const app = express();
app.use(express.json());

const csrf = require('csurf');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(csrf({ cookie: true }));

app.post('/run', (req, res) => {
    const allowedCommands = ['ls', 'whoami'];

    const command = req.body.command;

    if (!allowedCommands.includes(command)) {
        return res.status(400).send("Command not allowed");
    }

    execFile(command, [], (err, stdout, stderr) => {
        if (err) return res.status(500).send("Execution error");
        res.send(stdout);
    });
});

app.listen(3030, () => {
    console.log("Secure app running on port 3030");
});