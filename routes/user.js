const express = require('express');
const router = express.Router();
const db = require('../services/db');

router.get('/user', async (req, res) => {
    const id = req.query.id;   // IDOR
    const query = "SELECT * FROM users WHERE id = " + id; // SQL injection

    const result = await db.query(query);
    res.json(result);
});

module.exports = router;
