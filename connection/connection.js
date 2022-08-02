const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL)
.then(async res => {
  console.log('db connected successfully');
  // conn.remitance_data_with_todays_amount = await get_all_todays_amount();
  // await remitance_data_with_todays_amount()
})
.catch(e => {
  console.log(e);
})
