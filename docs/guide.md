
Way to go:

apply CSS
  bit.ly/chat-room-css

  wrap with <div class="chat-history"></div>

  remove older tags

Add send button
  <div id="send">
    <input id="msg" v-model="msg"/>
    <button v-on:click="send"><i class="fa fa-send"></i> Send</button>
  </div>

Init NPM
  go to project folder
  npm init

Tell about package.json

Install express & Socketio
  npm install --save express
  npm install --save socket.io

Create index.js & its code

  var express = require('express')
  var app = express()

  app.use(express.static(__dirname + '/public'))

  var server = app.listen(3000, function() {
    console.log('server started')
  })

Run server:
  node .

Import socket.io
  var socketio = require('socket.io')

Make start socket
  var io = socketio(server)

  io.on('connection', function(socket){
    socket.on('chatChannel', function(chat){
      io.emit('chatChannel', chat)
      console.log(chat)
    })
  })

Tell about server received a connection
  channel diagram
