const http= require('http');



const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!");

});

console.log(process.env.PORT)

server.listen(process.env.PORT, () => {
  console.log("Server was launched");
});
