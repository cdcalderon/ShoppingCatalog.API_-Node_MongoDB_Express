/**
 * Created by cdcalderon on 6/30/15.
 */
var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/shoppingCatalogDB');

var Category = require('./models/categoryModel');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

categoriesRouter = require('./Routes/categoryRoutes')(Category);


app.get('/', function(req, res){
    res.send('welcome to Carlos API');
});

app.use('/api/Categories', categoriesRouter);

app.listen(port, function(){
   console.log('Running on PORT:' + port);
});
