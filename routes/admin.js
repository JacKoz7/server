// Starting page
const path = require('path');

const express = require('express');

const router = express.Router();

const getting = [];

router.get('/', (req, res, next) => { // middleware function
    getting.push({title: req.body.title})
    res.sendFile(path.join(__dirname, '../', 'views', 'index.html')); // ../ - go up one level
    console.log(getting);

});

exports.routes = router;
exports.getting = getting;