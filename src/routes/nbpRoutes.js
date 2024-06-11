const express = require('express');
const nbpController = require('../controllers/nbpController');

const router = express.Router();

router.get('/currencies', nbpController.getCurrencies);

module.exports = router;
