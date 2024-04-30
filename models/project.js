const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: String,
    location: String,
    date: Date,
    number: String
});

module.exports = mongoose.model('Project', ProjectSchema);
