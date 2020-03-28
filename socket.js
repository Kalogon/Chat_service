module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('connected');
        
        socket.on('disconnect', function(){
            console.log('disconnected')
        })
        socket.on('chat message', function(message){
            console.log("send")
            socket.broadcast.emit('chat message', message)
        })
    });
  };