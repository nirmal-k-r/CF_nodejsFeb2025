//first express application
const express = require('express'); //import express library
const server = express(); //create an express server

//middleware
const logger = function (req, res, next) {
    console.log(`Received ${req.url} at ${new Date()}`);
    next();
};

server.use(logger);

server.get('/', function (req, res) {
    res.send('Hello World');
});

server.get('/fruits', function (req, res) {
    fruits=['apple','banana','orange'];
    res.send(fruits);
});

server.get('/fruits/:id', function (req, res) {
   id=req.params.id;
   id=parseInt(id);
   fruits=['apple','banana','orange'];

   res.send(fruits[id]); 

});


const port = 3000; //port number

server.listen(port, function () {
    console.log('Server is listening on port 3000');
});