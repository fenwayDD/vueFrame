const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
	username: String,
	password: String
});

let User = mongoose.model('user', userSchema);

module.exports = User;