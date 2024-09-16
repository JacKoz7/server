// page that displays after clicking button 
const path = require('path');

const express = require('express');
const { title } = require('process'); 

const router = express.Router();

// only post method, cant access the site via url
router.post('/smth', (req, res, next) => { // middleware function
    res.sendFile(path.join(__dirname, '../', 'views', 'something.html'));
});

module.exports = router;