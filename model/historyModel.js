const mongoose = require('mongoose');
const axios = require('axios');
// const {,get_todays_amount} = require('../utils/utils');

let sample = {
  key:1,
  totalPound : 693.07,
  totalTaka:82891,
  sending_date:new Date('2022-06-30').toDateString(),
  exchange_rate:119.6000,
  receipt_image:'image_1',
  paying_agent:'Any bank',
  govt_reward: 2000,
};

const historySchema = new mongoose.Schema({
  key:{
    type:String,
    required:true,
  },
  totalPound: {
    type:Number,
    required:true,
  },
  totalTaka: {
    type:Number,
    required:true,
  },
  sendingDate: {
    type:Date || String,
    reuired:true,
  },
  exchangeRate : {
    type: Number,
    required:true,
  },
  receiptImage: {
    type:Buffer,
    // required:true,
  },
  payingAgent: {
    type:String,
    default:'Any bank'
  },
  govtIncentive : {
    type:Number,
    default:0
  },
  todayAmount: {
    type:Number,
  },
  todayRate: {
    type:Number,
    required:false
  }
}, {
  timestamps:true,
});

historySchema.methods.toJSON = function() {
  const historyObject = this.toObject();
  delete historyObject._id;
  delete historyObject.receiptImage;
  delete historyObject.updatedAt;
  delete historyObject.createdAt;
  delete historyObject.__v;
  return historyObject;
}

// get_todays_amount(200);

// historySchema.post('find', async function(result) {
//   for(let i=0; i<result.length; i++) {
//     const today_amount = await get_todays_amount(result[i].totalPound);
//     console.log(today_amount);
//     console.log(typeof today_amount.amount)
//   }
// })

// const History = mongoose.model('History', historySchema);

module.exports = mongoose.models.History ||  mongoose.model('History', historySchema)