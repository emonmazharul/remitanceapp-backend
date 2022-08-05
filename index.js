if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

require('./connection/connection');
const path = require('path');
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


const publicPath = path.join(__dirname, '/public');

app.use(express.static(publicPath));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// app.use(cors({origin:}));
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

app.get('*', (req,res) => {
  res.sendFile(publicPath+'/index.html');
});

app.listen(process.env.PORT, function(err){
  if(err) {
    throw err;
  }
  console.log('server running on port ' + process.env.PORT);
})


module.exports = app;
