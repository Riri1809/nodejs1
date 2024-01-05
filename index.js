const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) =>{
    console.log(req.url);
    if  (req.url === '/'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello World</h1>');
    res.end();
} else if (req.url === '/test') {
    res.status = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("<h2>This is a test</h2>");
    res.end();
} else if (req.url === '/products') {
    res.status = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("<h3>Products Page</h3>");
    res.end();
} else {
    res.status = 404;
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Page Not Found!</h1>");
    res.end();
}
}).listen(port, hostname, () => {  
    console.log(`Server running at http://${hostname}:${port}/`);
}); 



