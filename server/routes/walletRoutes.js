const express = require('express');
const Wallet = require('../models/Wallet');
const router = express.Router();

// Get wallet balance
router.get('/balance', async (req, res) => {
  try {
    const wallet = await Wallet.findOne({ user: req.userId });
    if (!wallet) {
      return res.status(400).json({ message: 'Wallet not found' });
    }
    res.json({ balance: wallet.balance });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
