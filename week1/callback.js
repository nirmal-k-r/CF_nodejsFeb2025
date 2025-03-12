const fs = require('fs'); //import file system library

console.log('Program starts');

//readFile is an asynchronous function
fs.readFile('fruits.txt','utf-8', function(err,content){
    if (err){
        console.log(err);
        
    }else{
        console.log(content);
    }
});

console.log('Program ends');


