const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    address: { type: String, unique: true },
    name: String,
    location: String,
    proof: String,
    number: String
});

module.exports = mongoose.model('User', UserSchema);
