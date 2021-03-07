const path=require('path');
const express=require('express');
const http=require('http');
const socketio=require('socket.io');
const app=express();
const server=http.createServer(app);
const PORT=3000 || process.env.PORT;
app.use(express.static(path.join(__dirname, 'client')));

const io=socketio(server);
io.on('connection',socket=>{
    // current user
    socket.emit('message','well come to chat board');
    // broadcast user connection
    socket.broadcast.emit('message','A user has joined');
    //disconnect user
    socket.on('disconnect',()=>{
        io.emit('message','A user has left on chat');
    });
    // listen chatmsg
    socket.on('chatmsg', msg => {
        io.emit('message', msg);
    })
});
server.listen(PORT, () =>console.log(`server run on ${PORT}`));