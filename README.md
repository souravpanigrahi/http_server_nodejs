# Simple HTTP Server in Node

This is a simple HTTP server written in Node. It's not meant to be used for production, but rather as a learning tool to understand how HTTP servers work.

- Here I have used the HTTP module to create a simple HTTP server.
- The server listens on port 5000 for connections.
- The server responds with a 200 status code and an txt file for "/home" request.
- The server responds with a 200 status code and html file "Hello World" for all other "/" request.
- The html file is read from the file system using the fs module.
- The server responds with a 404 status code for any other request.

## Usage

- To start the server, run `node --watch index.js` in the terminal.
- To stop the server, press `Ctrl + C` in the terminal.
- The `--watch` is an optional flag that tells node to watch for changes in the file and restart the server, currently supported only in Node v19 and above in an experimental mode.

## Usefull Methods from the HTTP module

- `http.createServer()` - creates a new HTTP server and returns it, it accepts a function as an argument which is executed for every HTTP request that's made against the server with request and response objects as arguments.

```js
const server = http.createServer((request, response) => {
  // ...
});
```

- `server.listen()` - causes the server to accept connections.

```js
server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
```

- `server.close()` - stops the server from accepting new connections.

```js
server.close(() => {
  console.log("Server is closed");
});
```

- `server.on()` - used to bind functions to the various events that occur on a server.

```js
server.on("request", (request, response) => {
  // ...
});
```

- `response.writeHead()` - sends a response header to the request.

```js
response.writeHead(200, { "Content-Type": "text/html" });
```