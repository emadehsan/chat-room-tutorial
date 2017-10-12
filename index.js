var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'))

var server = app.listen(3000, function() {
  console.log('server started')
})

var socketio = require('socket.io')
var io = socketio(server)

io.on('connection', function(socket){
  socket.on('chatChannel', function(chat){
    io.emit('chatChannel', chat)
    console.log(chat)
  })
})
