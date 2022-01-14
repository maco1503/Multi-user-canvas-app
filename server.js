import express  from "express";
import http from 'http';
import { Server } from "socket.io";

const app = express();
const port = 8080;
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

console.log("merge");


io.on('connection', (socket) => {
    socket.on('mouse', (data) => {
        socket.broadcast.emit('mouse',data);
    })
    socket.on('reset', () => {
        socket.broadcast.emit('reset');
        socket.emit('reset');
    })
});
server.listen(port);