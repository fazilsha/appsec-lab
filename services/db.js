const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "SuperSecret123",  // hardcoded secret
    database: "appdb"
});

module.exports.query = (q) => {
    return new Promise((resolve, reject) => {
        connection.query(q, (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
};
