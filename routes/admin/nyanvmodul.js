var mongodb = require('mongodb');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/grupp1');

var userSchema = new Schema({

	id: Number,
	name: String,
	pwd: String,
	mobil: String,
	admin: Boolean,
	email: String,
	timesPrivate: Number

});

var User = mongoose.model('User', userSchema);

module.exports = User;