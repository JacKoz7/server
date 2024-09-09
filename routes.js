const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Funny server</title></head>');
        res.write('<body>');
        res.write('<form action="/action" method="POST">');
        res.write('<button type="submit">do something</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/action' && method === 'POST') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Funny server</title></head>');
        res.write('<body>');
        res.write('<h1>You did something</h1>');
        res.write('<a href="/">Go back</a>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
}

exports.handler = requestHandler;