const mongoose = require('mongoose');

const LoanSchema = new mongoose.Schema({
    hash: String,
    requiredAmount: Number,
    address: String,
    status: { type: String, default: 'Pending' }
});

module.exports = mongoose.model('Loan', LoanSchema);
