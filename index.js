const http = require("http");
const https = require('https');
const fs = require('fs');
const app = require("./app");
const { 
    PORT, 
    SSLSecure,
    KeyFileName,
    KeyExtension,
    CertFileName,
    CertExtension
} = process.env;
var server;
if (SSLSecure === "true") {
    server = https.createServer({
        key: fs.readFileSync(`cert/${KeyFileName}.${KeyExtension}`),
        cert: fs.readFileSync(`cert/${CertFileName}.${CertExtension}`)
    }, app)
    }else {
        server = http.createServer(app)
    }
// const { Server } = require("socket.io");
// const io = new Server(server);
const port = PORT || 3001;

// server listening 
// io.on('connection', (socket) => {
//   console.log(`User Connected: ${socket.id}`);
//   socketHandlers(io, socket);
// });

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});