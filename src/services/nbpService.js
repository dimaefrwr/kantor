const axios = require('axios');

exports.fetchExchangeRates = async () => {
  const response = await axios.get('https://api.nbp.pl/api/exchangerates/tables/A/?format=json');
  return response.data[0].rates;
};
