const payuService = require('../services/payuService');

describe('payuService', () => {
  it('should create a payment', async () => {
    const paymentData = { 
      amount: 100, 
      currency: 'USD', 
      description: 'Test payment', 
      customer: {
        email: 'test@example.com',
        name: 'John Doe'
      } 
    };
    const payment = await payuService.createPayment(paymentData);
    expect(payment).toBeDefined();
  });
});
