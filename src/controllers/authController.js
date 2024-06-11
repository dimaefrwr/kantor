const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const authService = require('../services/authService');

exports.register = async (req, res) => {
  try {
    console.log("Dane przesłane w żądaniu:", req.body); 
    const { username, password, email } = req.body;

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ error: 'Username or email already exists' });
    }

    console.log("Dane wejściowe z formularza rejestracji:", username, password, email); 
    const hashedPassword = await bcrypt.hash(password, 10); 

    const newUser = new User({
      username,
      password: hashedPassword,
      email,
    });

    await newUser.save();

    const token = authService.generateToken({ username: newUser.username, email: newUser.email });

    res.status(201).json({ token });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Failed to register user' });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    const token = authService.generateToken({ username: user.username, email: user.email });
    res.json({ token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Failed to login' });
  }
};