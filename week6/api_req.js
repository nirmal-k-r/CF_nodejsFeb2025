ax=require('axios');

//senf get request to chucknoriss api
// ax.get('https://api.chucknorris.io/jokes/random')
// .then(function(response){
//     console.log(response.data.value);
// });


//add category param

params={
    category: 'political'
}
url="https://api.chucknorris.io/jokes/random";

ax.get(url, {params:params})
.then(function(response){
    console.log(response.data.value);
});