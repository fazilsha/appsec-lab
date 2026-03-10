const express = require('express');
const app = express();

const userRoutes = require('./routes/user');

app.use('/api', userRoutes);

app.get('/', (req, res) => {
    eval(req.query.code);   // intentional vulnerability
    res.send("Hello AppSec Lab");
});

app.listen(3030);