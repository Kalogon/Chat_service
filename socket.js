const username = ["Jack", "Lukas", "James", "Oliver", "Sophia", "Emma", "Aria", "Amelia"]


module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('connected');
        const user = username[Math.floor(Math.random()*username.length)]
        
        io.to(socket.id).emit('name', user)
        socket.broadcast.emit('enter', user)

        socket.on('disconnect', function(){
            console.log('disconnected')
        })

        socket.on('chat message', function(message){
            console.log("send")
            socket.broadcast.emit('chat message', user, message)
        })
    });
  };