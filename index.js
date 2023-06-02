const http = require("http"); //required the http module
const fs = require("fs");
//assigning the port
const PORT = 5000;
//using create server function we can actually create a basic http server using http module
const server = http.createServer(function listner(request, response) {
  //this callback is a listener function that is going to collect every http request we make to our server
  if (request.url == "/home") {
    fs.readFile("textfile.txt", (err, data) => {
      if (err) {
        console.error(err);
        response.writeHead(500, { "Content-Type": "text/html" });
        response.end("500 - Internal Server Error");
        return;
      }
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(data);
    });
  } else if (request.url == "/") {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        console.error(err);
        response.writeHead(500, { "Content-Type": "text/html" });
        response.end("500 - Internal Server Error");
        return;
      }
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(data);
    });
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end("404 - Page Not Found");
  }
});

server.listen(PORT, function () {
  //once we start the server this function will be called on the given port
  console.log("Server listening on port: " + PORT);
});
