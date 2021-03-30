const express = require('express');
const socket = require('socket.io');

// express app
const app = express();

//listen for requests
const server = app.listen(3000);

//static files
app.use(express.static('public'));

//Socket
const io = socket(server);

io.on('connection', socket => {
    console.log('new connection: ' + socket.id);
    socket.on('mouse', mouseMsg => {
        socket.broadcast.emit('mouse', mouseMsg);
        console.log(mouseMsg);
    });
});










//succes!
console.log("My socket server is running");