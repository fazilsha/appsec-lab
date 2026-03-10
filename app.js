const express = require('express');
//const { exec } = require('child_process');

const app = express();

//const API_KEY = "123456-SECRET-KEY-ADM
/**
app.get('/user', (req, res) => {
    const user = req.query.user;

    const query = "SELECT * FROM users WHERE username = '" + user + "'";
    console.log(query);

    res.send("User lookup executed");
});

app.get('/ping', (req, res) => {
    const host = req.query.host;

    exec("ping -c 1 " + host, (err, stdout) => {
        res.send(stdout);
    });
});

app.listen(3030, () => {
    console.log("Secure App Running");
});// webhook test
**/
