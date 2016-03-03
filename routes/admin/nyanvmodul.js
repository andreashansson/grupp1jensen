var mongodb = require('mongodb');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/grupp1');

var userSchema = new Schema({

	name: String,
	pwd: String
	//mobil: String,
	//admin: boolean,
	//email: String,
	//times: Number

});

var User = mongoose.model('User', userSchema);

module.exports = User;