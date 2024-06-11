const authService = require('../services/authService');

describe('authService', () => {
  it('should login and return a token', async () => {
    const userData = { username: 'admin', password: 'admin' };
    const token = await authService.generateToken(userData); 
    expect(token).toBeDefined();
  });
});
