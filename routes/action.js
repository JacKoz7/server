const express = require('express');

const router = express.Router();

// only post method, cant access the site with url
router.post('/smth', (req, res, next) => { // middleware function
    console.log(req.body);
    res.send('<h1>You did something</h1>')
});

module.exports = router;