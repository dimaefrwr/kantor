const nbpService = require('../services/nbpService');

describe('nbpService', () => {
  it('should fetch exchange rates', async () => {
    const rates = await nbpService.fetchExchangeRates();
    expect(rates).toBeDefined();
    expect(rates.length).toBeGreaterThan(0);
  });
});