const nbpService = require('../services/nbpService'); 

exports.getCurrencies = async (req, res) => {
  try {
    const rates = await nbpService.fetchExchangeRates();
    res.render('currencies', { rates });
  } catch (error) {
    console.error('Error fetching currency rates:', error);
    res.status(500).json({ error: 'Failed to fetch currency rates' });
  }
};
