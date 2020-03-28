module.exports = (io) => {
    io.on('connection', (socket) => { // 웹소켓 연결 시
        console.log('Connected');
        
        socket.on('disconnect', function(){
            console.log('disconnected')
        })
        socket.on('chat message', function(message){
            console.log("send")
            io.emit('chat message', message)
        })
    });
  };