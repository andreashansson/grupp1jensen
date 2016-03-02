var express = require('express');
var router = express.Router();
var User = require('./nyanvmodul');

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/grupp1';

/* GET home page. */
router.get('/anvandare', function(req, res, next) {

	var findRestaurants = function(db, callback) {
   	
   		var cursor = db.collection('restaurants').find( );
   		
   		cursor.each(function(err, doc) {
      	
      		assert.equal(err, null);
      
      		if (doc != null) {
         		console.dir(doc);
      		}
      		
      		else {
         
         		callback();
      		}
   		});
	};

	MongoClient.connect(url, function(err, db) {
	  	
	  	assert.equal(null, err);
	  	
	  	findRestaurants(db, function() {

	  		console.log();
	    
	    	db.close();

  		});
  	});


	res.render('./admin/anvandare');

		
});


module.exports = router;
