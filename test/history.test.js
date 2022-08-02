const fs = require('fs');
const mongoose = require('mongoose');
const request = require('supertest');
const chai = require('chai');
const History = require('../model/historyModel');
const app = require('../index');

require('dotenv').config();

const expect = chai.expect;

describe('TEST/ HISTORY ROUTES', function() {
  // you can set or not keep it defualt.but i do this so that if our code longer time it would give timeout error
  this.timeout(7000);

  before(function() {
    mongoose.connect(process.env.DB_URL)
      .then(res => {
        console.log('db connected');
        done();
      })
  })


  it('should failed to load remitance data without admin login', function(done) {
    request(app)
      .get('/remitance/all_histories')
      .set('Cookie', `some cookie`)
      .then(res => {
        expect(res.statusCode).to.equal(401);
        // our mock data send 4 items in array
        done();
      })
  })
  
  it('should failed to load single remitance data without admin login', function(done) {
    request(app)
      .get('/remitance/history/mock_key_1')
      .then(res => {
        expect(res.statusCode).to.equal(401);
        expect(res.body).to.have.property('message');
        expect(res.body).to.have.property('type');
        done();
      })
  })


  it('should failed to load remitance image without admin login', function(done) {
    request(app)
      .get('/remitance/receipt_image/mock_key_1')
      .then(res => {
        expect(res.statusCode).to.equal(401);
        done();
      })
  })


  it('should failed to delete remitance image without admin login', function(done) {
    request(app)
      .delete('/remitance/receipt_image/mock_key_1')
      .then(res => {
        expect(res.statusCode).to.equal(401);
        done();
      })
  })

  it('should failed to upload a remitance history  without admin login', function(done) {
    request(app)
      .post('/remitance/history')
      .then(res => {
        expect(res.statusCode).to.equal(401);
        done();
      })
  })


  it('should failed to upload a remitance history  without an receipt image', function(done) {
    const mock_history = {
      totalPound : 320.07,
      totalTaka:56076,
      sendingDate:new Date('2022-05-30').toDateString(),
      exchangeRate:116.6000,
      payingAgent:'Any bank',
      govtIncentive: 123.23,
    };
    const admin_cookie  = `some cookie`;
    request(app)
      .post('/remitance/history')
      .set('Cookie', admin_cookie)
      .send(mock_history)
      .then(res => {
        expect(res.statusCode).to.equal(406);
        expect(res.body).to.have.property('message');
        expect(res.body).to.have.property('type');
        done();
      })
  })

  it('should failed to upload a remitance history without an all require field', function(done) {
    
    after(async function() {
      try {
        const history = await History.findOne({govtIncentive:123.23});
        if(history) {
          await history.remove();
        }
      } catch (e) {
        console.log(e);
      }
    })
    const test_image = fs.readFileSync('./img/receipt-sample.png');
    const admin_cookie  = `some cookie`;

    request(app)
      .post('/remitance/history')
      .set('Cookie', admin_cookie)
      .attach('avatar', test_image, {filename:'receipt-sample.png', contentType:'image/png'})
      .then(res => {
        expect(res.statusCode).to.equal(406);
        expect(res.body).to.have.property('message');
        expect(res.body).to.have.property('type');
        expect(res.body.message).to.equal('Please fill up all the necessary information field!')
        done();
      })
  })

  it('should pass to get all remitance data with admin credentials', function(done) {
    this.timeout(12000)
    const admin_cookie  = `some cookie`;
    request(app)
      .get('/remitance/all_histories')
      .set('Cookie', admin_cookie)
      .then(res => {
        expect(res.statusCode).to.equal(200);
        done();
      })
  })

  it('should pass to get a single remitance data with admin credentials', function(done) {
    const admin_cookie  = 'some cookie';
    request(app)
      .get('/remitance/history/62e61f236c6ee66cff4de973')
      .set('Cookie', admin_cookie)
      .then(res => {
        expect(res.statusCode).to.equal(200);
        done();
      })
  })


  it('should pass to upload a remitance history with all require elements', function(done) {
    
    after(async function() {
      try {
        const history = await History.findOne({govtIncentive:123.23});
        if(history) {
          await history.remove();
        }
      } catch (e) {
        console.log(e);
      }
    })
    const test_image = fs.readFileSync('./img/receipt-sample.png');
    const mock_history = {
      totalPound : 320.07,
      totalTaka:56076,
      sendingDate:new Date('2022-05-30').toDateString(),
      exchangeRate:116.6000,
      payingAgent:'Any bank',
      govtIncentive: 123.23,
    };

    const admin_cookie  = 'some cookie';
    request(app)
      .post('/remitance/history')
      .set('Cookie', admin_cookie)
      .field('totalPound', mock_history.totalPound)
      .field('totalTaka', mock_history.totalTaka)
      .field('sendingDate', mock_history.sendingDate)
      .field('exchangeRate', mock_history.exchangeRate)
      .field('payingAgent', mock_history.payingAgent)
      .field('govtIncentive', mock_history.govtIncentive)
      .attach('avatar', test_image, {filename:'receipt-sample.png', contentType:'image/png'})
      .then(res => {
        expect(res.statusCode).to.equal(201);
        expect(res.body).to.have.property('totalPound');
        expect(res.body).to.have.property('totalTaka');
        expect(res.body).to.have.property('exchangeRate');
        done();
      })
  })

  it('should pass to delete a remitance history with admin credentials', function(done) {
    
    const admin_cookie  = 'some cookie';
    request(app)
      .delete('/remitance/receipt_image/som key')
      .set('Cookie', admin_cookie)
      .then(res => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.have.property('message');
        expect(res.body).to.have.property('type');
        expect(res.body.message).to.equal('successfully deleted the document');
        done();
      })
  })

  it('should fail to delete a remitance history with admin credentials but invalid key params', function(done) {
    
    const admin_cookie  = 'some cookie'; 
    request(app)
      .delete('/remitance/receipt_image/nokey')
      .set('Cookie', admin_cookie)
      .then(res => {
        expect(res.statusCode).to.equal(404);
        expect(res.body).to.have.property('message');
        expect(res.body).to.have.property('type');
        done();
      })
  })




  
})

