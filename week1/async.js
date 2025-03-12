const fs = require('fs');

async function readFruitFile(){
   try{
        let content= await fs.readFileSync('fruits.txt','utf-8');
        console.log(content);
   }catch(err){
       console.log(err);
   }
}

console.log('Program starts');
readFruitFile();
console.log('Program ends');
