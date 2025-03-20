const express = require('express');
const app = express();
var db=require('./db');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())

var Product=require('./models/products');

app.get('/products', async function (req, res) {  
    products= await Product.find({});
    // res.json(products); //return json data
    response={
        products: products,
        count: products.length,
        status: 'success'
    }
    //return json data plu status code
    res.status(200).json(response);
    // return response;
});

//create product
app.post('/products', async function (req, res) {  
    //read json body
    name=req.body.name;
    description=req.body.description;
    price=req.body.price;
    stock=req.body.stock;
    category=req.body.category;
    img_url=req.body.img_url;

    //create a new product
    new_product=new Product({
        name: name,
        description: description,
        price: price,
        stock: stock,
        category: category,
        imgUrl: img_url
    });

    //save the product
    await new_product.save();
    response={
        status: 'success',
        message: 'Product created successfully',
        product: new_product
    }
    res.status(201).json(response);
});


//start server
var port=4000;
app.listen(port,function(){
    console.log(`API is listening on port ${port}`);
});