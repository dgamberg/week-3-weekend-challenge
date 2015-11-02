var express = require('express');
var router = express.Router();
var path = require('path');

//Module Imports
var createAdditionObject = require('../modules/createAdditionObject');
var createSubtractionObject = require('../modules/createSubtractionObject');
var createMultiplyObject = require ('../modules/createMultiplyObject');
var createDivideObject = require('../modules/createDivideObject');

//Routes
router.route('/add');
router.route('/subtract');
router.route('/multiply');
router.route('/divide');

//Math Object Imports From Modules
router.post('/add',      function(req, res){res.send( createAdditionObject(req) );}) ;
router.post('/subtract', function(req, res){res.send( createSubtractionObject(req) ); });
router.post('/multiply', function(req, res){res.send( createMultiplyObject(req) ); });
router.post('/divide',   function(req, res){res.send( createDivideObject(req) ); });

router.get('/*', function (req, res){
    var file = req.params[0] || "index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;