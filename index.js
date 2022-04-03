// const cv = require('opencv4nodejs');
// const path = require('path');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost3000"
  }
});

  

//const wCap = new cv.VideoCapture(0);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// setInterval(() => {
//     const frame = wCap.read();
//     const image = cv.imencode('.jpg', frame).toString('base64');
//     io.emit('image', image);
// }, 1000)

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
  });

server.listen(3000, () => {
  console.log('listening on *:3000');
});