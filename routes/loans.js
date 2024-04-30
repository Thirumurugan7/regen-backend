const express = require('express');
const router = express.Router();
const Loan = require('../models/loan');

// Submit loan
router.post('/submit', async (req, res) => {
    const newLoan = new Loan(req.body);
    await newLoan.save();
    res.status(201).json({ message: 'Loan submitted', loan: newLoan });
});

// View all loans
router.get('/', async (req, res) => {
    const loans = await Loan.find();
    res.json(loans);
});

// Approve loan
router.patch('/approve/:id', async (req, res) => {
    const loan = await Loan.findByIdAndUpdate(req.params.id, { status: 'Approved' }, { new: true });
    res.json({ message: 'Loan approved', loan });
});

module.exports = router;
