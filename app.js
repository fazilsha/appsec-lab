const express = require('express');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');

const app = express();

app.use(express.json());
app.use(cookieParser());

// Enable CSRF protection
app.use(csrf({ cookie: true }));

app.get('/', (req, res) => {
    res.send("Secure App Running");
});

app.listen(3030, () => {
    console.log("Secure app running on port 3030");
});