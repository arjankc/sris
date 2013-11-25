//Initialize WebSocket
function connect()
{
   try
   {
       var socket;
       var host = "ws://localhost:8000/WebSocket/Default.aspx";

       var socket = new WebSocket(host);

       message('Socket Status: '+socket.readyState);

       socket.onopen = function(){
           message('Socket Status: '+socket.readyState+' (open)');
       }

       socket.onmessage = function(msg){
           message('Received: '+msg.data);
       }

       socket.onclose = function(){
           message('Socket Status: '+socket.readyState+' (Closed)');
       }         
    } 
    catch(exception)
    {
       message('Error'+exception);
    }
} 
//Send Message to WebSocket Server
function send(message)
{
    try
    {
        socket.send(message);
    }
    catch(exception)
    {
       message('Error:' + exception);
    }
}