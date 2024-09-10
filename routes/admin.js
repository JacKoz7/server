const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => { // middleware function
    res.send('<form action="/smth" method="POST"><input type="text" name="name"><button type="submit">Do something</button></form>');
});

module.exports = router;