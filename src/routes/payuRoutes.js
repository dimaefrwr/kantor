const express = require('express');
const payuController = require('../controllers/payuController');

const router = express.Router();

router.post('/payment', payuController.createPayment);

module.exports = router;