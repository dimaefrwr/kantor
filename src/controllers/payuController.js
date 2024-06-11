const payuService = require('../services/payuService');

exports.createPayment = async (req, res) => {
  try {
    const payment = await payuService.createPayment(req.body);
    res.json(payment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create payment' });
  }
};