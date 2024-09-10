const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => { // middleware function
    res.sendFile(path.join(__dirname, '../', 'views', 'index.html')); // ../ - go up one level
});

module.exports = router;