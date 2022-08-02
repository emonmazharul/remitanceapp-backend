const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  fullname: {
    type:String,
    required:true,
    trim:true,
  },
  email: {
    type:String,
    unique:true,
    required:true,
    trim:true,
    lowercase:true,
    validate(input) {
      if( !validator.isEmail(input) ) {
        console.log('User already exist with this email');
        throw new Error('email should be an valid email');
      }
    }
  },
  password: {
    type:String,
    required:true,
    trim:true,
    minLength:6,
    validate(input) {
      if(input === 'password' || input === '123456') {
        throw new Error('Please provide a more secure password');
      }
    }
  },
  role:{
    type:String,
    required:true,
    enums:['Admin', 'User'],
    default:'User'
  }
}, {
  timestamps:true,
})

userSchema.methods.toJSON = function() {
  // this means individual user;
  const userObject = this.toObject();
  delete userObject._id;
  delete userObject.password;
  delete userObject.__v;
  delete userObject.createdAt;
  delete userObject.updatedAt;
  return userObject;
}

userSchema.pre('save', async function() {
  const user = this;
  if(user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
})


// const User = mongoose.model('User', userSchema);

module.exports = mongoose.models.User || mongoose.model('User', userSchema)