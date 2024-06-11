require('dotenv').config(); 
const mongoose = require('mongoose');
const app = require('./app'); 
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/kantor', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
})
.catch(error => {
  console.error('Failed to connect to MongoDB', error);
});
