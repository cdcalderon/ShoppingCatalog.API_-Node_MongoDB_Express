/**
 * Created by cdcalderon on 7/1/15.
 */
var express = require('express');

var routes = function(Category){
    var shoppingCatalogRouter = express.Router();
    shoppingCatalogRouter.route('/')
        .post(function(req, res){
            var category = new Category(req.body);
            category.save();
            res.status(201).send(category);
        })
        .get(function(req, res){
            var query = {};
            if(req.query.name){
                query.name = req.query.name;
            }

            Category.find(query, function(err, categories){
                if(err){
                    res.status(500).send(err);
                } else {
                    res.json(categories);
                }
            });
        });

    shoppingCatalogRouter.route('/:catId')
        .get(function(req, res){
            Category.findById(req.params.catId, function(err, category){
                if(err){
                    res.status(500).send(err);
                } else {
                    res.json(category);
                }
            });
        });

    return shoppingCatalogRouter;
};

module.exports = routes;