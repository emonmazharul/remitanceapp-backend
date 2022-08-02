const chalk = require('chalk');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcryptjs');
const User = require('../model/userModel');


passport.use(new LocalStrategy({
  usernameField:'email'
},async function verify(username,password,cb) {
  try {
    const user = await User.findOne({email:username});
    if(!user) {
      return cb(null, false, {error:'Invalid email or password'});
    }
    const doesPasswordMatch = await bcrypt.compare(password,user.password);
    if(!doesPasswordMatch) {
      return cb(null, false, {error:'Invalid email or password'});
    }
    return cb(null,user);
  } catch (e) {
    console.log(e);
    console.log(chalk.bgBlackBright(e.message));
    return cb(e);
  }
}))


passport.serializeUser(function(user,cb) {
  return cb(null, user.id)
})


passport.deserializeUser(async function(id,cb) {
  try {
    const user = await User.findById(id);
    cb(null,user);
  } catch (error) {
    cb(error,null)
  }
})

module.exports = passport;