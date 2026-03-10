const jwt = require('jsonwebtoken');

const SECRET = "123456"; // weak secret

exports.generateToken = (user) => {
    return jwt.sign(user, SECRET);
};

exports.verifyToken = (token) => {
    return jwt.verify(token, SECRET);
};
