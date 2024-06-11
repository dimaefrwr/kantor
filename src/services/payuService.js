const axios = require('axios');
const config = require('../config/config');

exports.createPayment = async (paymentData) => {
  try {
    const response = await axios.post('https://secure.payu.com/api/v2_1/orders', paymentData, {
      headers: {
        'Authorization': `Bearer ${config.payuToken}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
