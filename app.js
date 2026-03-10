const express = require('express');
const app = express();

app.get('/', (req, res) => {
    eval(req.query.code);   // intentional vulnerability
    res.send("Hello AppSec");
});

app.listen(3030);