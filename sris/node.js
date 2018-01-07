<script>
var http = require('http');
var io = require('socket.io');
 
server = http.createServer(function(req, res){
});
server.listen(3000);
 
// socket.io 
var socket = io.listen(server);
 
socket.on('connection', function(client){
  client.on('message', function(msg){
      socket.broadcast(msg);
  })
}); 
</script>