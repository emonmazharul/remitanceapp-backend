const mongoose = require('mongoose');
const request = require('supertest');
const chai = require('chai')
const User = require('../model/userModel');
const app = require('../index');

require('dotenv').config();

const expect = chai.expect;

describe('TEST/ TESGIN USER ROUTES', function() {
  // you can set or not keep it defualt.but i do this so that if our code longer time it would give timeout error
  this.timeout(7000);
  
  before(function() {
    mongoose.connect(process.env.DB_URL)
      .then(res => {
        console.log('db connected');
        done();
      })
  })


  it('should failed to get the user data', function(done) {
    request(app)
      .get('/user')
      .then(res => {
        expect(res.body).to.have.property('message');
        expect(res.body).to.have.property('type');
        expect(res.statusCode).to.equal(401);
        done();
      })
  })

  it('should pass to get the user data', function(done) {
    request(app)
      .get('/user')
        // here is the process is minimal
        // first login and get the cookie from insomnia or postman (insomnia preferred);
        // copy the cookie value and set it like below/it will surely work
      .set('Cookie', `some cookie`)
      .then(res => {
        expect(res.body).to.have.property('isAuthenticated');
        expect(res.body).to.have.property('user');
        expect(res.body.user).to.have.property('email');
        expect(res.body.user).to.have.property('fullname');
        expect(res.body.user).to.have.property('role');
        expect(res.statusCode).to.equal(200);
        done();
      })
  })

  it('should failed to sign up' , function(done) {

    request(app)
      .post('/user/signup')
      // this could be a duplicte email or password as 123456 or request body without a require property;
      .send({email:'example@test.com', password:'password', fullname:'John Doe' })
      .then(res => {
        expect(res.statusCode).to.equal(409);
        expect(res.body).to.have.property('message');
        expect(res.body).to.have.property('type');
        done();
      })

  })

  it('should sign up successfully' , function(done) {
    
    before(async function() {
      try {
        const user = await User.findOne({email:'doe@test.com'});
        if(user) {
          await user.remove();
        }
      } catch (e) {
        console.log(e);
      }
    })

    after(async function() {
      try {
        const user = await User.findOne({email:'doe@test.com'});
        if(user) {
          await user.remove();
        }
      } catch (e) {
        console.log(e);
      }
    })

    request(app)
      .post('/user/signup')
      .send({email:'doe@test.com', password:'doeexample', fullname:'John Doe' })
      .then(res => {
        expect(res.statusCode).to.equal(201);
        expect(res.body).to.have.property('isAuthenticated');
        expect(res.body).to.have.property('user');
        done();
      })

  })

  it('should failed to login' , function(done) {
    request(app)
      .post('/user/login')
      .send({email:'example@test.com', password:'example12345'})
      .redirects(1)
      .then(res => {
        expect(res.statusCode).to.equal(401);
        expect(res.body).to.have.property('message');
        expect(res.body).to.have.property('type');
        done();
      })
  })

  it('should pass to login user', function(done) {
    request(app)
      .post('/user/login')
      .send({email:'a valid email', password:'a valid password'})
      .redirects(1)
      .then(res => {
        // here 401 means success because after a successful login 
        //it redirect the user to the user page and without cookie header it give a 401 unauthorize status
        expect(res.statusCode).to.equal(401);
        done();
      })
  })

 it('should return 401 for a unauthorize request', function(done) {
    request(app)
      .get('/user/unauthorized_request')
      .then(res => {
        expect(res.statusCode).to.equal(401);
        expect(res.body).to.have.property('message');
        expect(res.body).to.have.property('type');
        done();
      })
 })

 it('should pass to lgout user', function(done) {
  request(app)
    .post('/user/logout')
    .then(res => {
      expect(res.statusCode).to.equal(200);
      expect(res.body).to.have.property('message');
      expect(res.body).to.have.property('type');
      done();
    })
})

})

