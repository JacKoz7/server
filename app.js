const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/name', (req, res, next) => { // middleware function
    console.log(req.body);
    res.send('<h1>Hello!</h1>')
});

app.use('/', (req, res, next) => { // middleware function
    res.send('<form action="/name" method="POST"><input type="text" name="name"><button type="submit">Whats your name</button></form>');
});

app.listen(3000);