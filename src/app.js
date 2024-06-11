const express = require('express');
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const nbpRoutes = require('./routes/nbpRoutes');
const payuRoutes = require('./routes/payuRoutes');
const nbpService = require('./services/nbpService');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public'))); 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use((req, res, next) => {
  console.log(`Incoming request ${req.method} ${req.url}`);
  next();
});

app.use('/auth', authRoutes);
app.use('/nbp', nbpRoutes);
app.use('/payu', payuRoutes);

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.get('/currencies', async (req, res) => {
  try {
    const rates = await nbpService.fetchExchangeRates();
    res.render('currencies', { rates });
  } catch (error) {
    console.error('Error fetching currency rates:', error);
    res.status(500).json({ error: 'Failed to fetch currency rates' });
  }
});

app.get('/', (req, res) => {
  res.render('index');
});

module.exports = app;
