const jwt = require('jsonwebtoken');
const config = require('../config/config');

exports.generateToken = (user) => {
  return jwt.sign(user, config.jwtSecret, { expiresIn: '1h' });
};