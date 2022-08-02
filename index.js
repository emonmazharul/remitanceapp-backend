require('dotenv').config();
require('./connection/connection');

const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo');
const cors = require('cors');

// created modules;
const passport = require('./auth/auth');
const userRoute = require('./route/userRoute');
const historyRoute = require('./route/historyRoute');

//express application
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors({origin:'*'}))
app.use(cookieParser());
app.use(session({
  secret:process.env.SESSION_SECRET,
  resave:false,
  saveUninitialized:false,
  store:MongoStore.create({
    mongoUrl:process.env.DB_URL,
  }),
  cookie:{
    maxAge:  1000 * 60 * 60 * (24*5)
  }
}));

app.use(passport.authenticate('session'));


app.use('/user',userRoute);
app.use('/remitance', historyRoute);

app.get('/', (req,res) => {
  res.send({message:'hello world'});
})

app.get('*', (req,res) => {
  res.send({message:'404! not found'});
})


app.listen(process.env.PORT, function(err){
  if(err) {
    throw err;
  }
  console.log('server running on port ' + process.env.PORT);
})


module.exports = app;
