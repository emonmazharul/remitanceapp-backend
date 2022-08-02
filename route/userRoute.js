const express = require('express');
const ensureLogIn = require('../auth/ensureHandler');
const passport = require('../auth/auth');
const User = require('../model/userModel');


const ensureLoggedIn = ensureLogIn({
  responseData:{message:'Please login to view the content of this page!',type:'error'},
});

const router = new express.Router();

// require('../auth/auth');

// router.get('/', ensureLoggedIn, (req,res) => {
//   res.send({
//     isAuthenticated:true,
//     user:req.user,
//   });
// })

router.get('/', ensureLoggedIn, (req,res) => {
  res.send({
    isAuthenticated:true,
    user:req.user,
  });
})

router.get('/unauthorized_request', (req,res) => {
  if(req.user) {
    req.logout(function(err) {
      if(err) throw new Error(err);
      res.status(401).send({message:'Invalid username or password',type:'error'});
    })
    return;
  }
  res.status(401).send({message:'Invalid username or password',type:'error'});
})


router.get('/login', (req,res) => {
  res.status(200).send({message:'Welcome to the login page'});
})

router.post('/signup', async (req,res,next) => {
  try {
    const {fullname,email,password} = req.body;
    const user = new User({
      fullname,
      email,
      password
    });
    await user.save();
    req.login(user, function(err) {
      if(err) return next(err);
      res.status(201).send({
        isAuthenticated:true,
        user:user
      });
    })
  } catch (e ) {
    console.log(e);
    console.log(e.message);
    res.status(409).send({message:'Sign up Failed! Please try again.', type:'error'});
  }
})


router.post('/login',passport.authenticate('local', {
  successRedirect:'/user/', 
  failureRedirect:'/user/unauthorized_request'
  // successMessage:'Logged in successfylly',
  // failureMessage:'Invalid email or password'
  })
)


router.post('/logout', (req,res,next) => {
  req.logout(function(err) {
    if(err) {
      console.log(err);
      return next(err);
    }
    res.status(200).send({message:'Loged out successfully',type:'success'})
  })
})





module.exports = router;