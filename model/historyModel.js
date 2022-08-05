const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  key:{
    type:String,
    required:true,
  },
  pinNumber:{
    type:String,
    required:true,
    unique:true,
    minLength:5
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
  delete historyObject.pinNumber;
  delete historyObject.receiptImage;
  delete historyObject.updatedAt;
  delete historyObject.createdAt;
  delete historyObject.__v;
  return historyObject;
}


module.exports = mongoose.models.History ||  mongoose.model('History', historySchema)