var mongodb = require('mongodb');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

	id: Number,
	name: String,
	pwd: String,
	mobil: String,
	avdelning: String,
	admin: Boolean,
	email: String,
	timesPrivate: Number

});

var User = mongoose.model('User', userSchema);

module.exports = User;