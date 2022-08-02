const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL)
.then(async res => {
  console.log('db connected successfully');
})
.catch(e => {
  console.log(e);
})
