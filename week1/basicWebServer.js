const http = require('http');

// Create a server instance
const server=http.createServer(async function(req,res){
    res.end('Hello World');
})

//listen to url and port
port=3000;
// url='http://localhost';

server.listen(port,function(){
    console.log('Server is listening on port 3000');
});

