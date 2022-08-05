const fs = require('fs');
const express = require('express');
const { Readable } = require('stream'); 
const multer = require('multer');
const ensureLogIn = require('../auth/ensureHandler');
const { v4: uuidv4 } = require('uuid');
const History = require('../model/historyModel');
const {get_todays_amount} = require('../utils/utils');
const {mock_history} = require('../mock/data');

// History.deleteMany()
//   .then(res => {
//     console.log(res);
//   })

const ensureLoggedIn = ensureLogIn({
  responseData:{message:'Please login to view/modify the content of this page!',type:'error'},
});


const router = new express.Router();

const upload = multer({})

router.get('/all_histories', ensureLoggedIn, async (req,res) => {
  if(req.user.email !== process.env.ADMIN_EMAIL) {
    return res.status(401).send(mock_history);
  }
  try {
    const histories = await History.find();
    for(let i=0; i<histories.length; i++) {
      const {amount,rate} = await get_todays_amount(histories[i].totalPound);
      histories[i].todayAmount = amount;
      histories[i].todayRate = rate;
    }
    res.status(200).send(histories);
  } catch(e) {
    console.log(e);
    console.log(e.message);
    res.status(404).send({error:"Cannot post history details.Please try agan.",type:'error'});
  } 
})


router.get('/history/:id', ensureLoggedIn,  async(req,res) => {
  if(req.user.email !== process.env.ADMIN_EMAIL) {
    return res.status(401).send({
      message:'Your are not allowed to view the content of this page',
      type:'error',
    })
  }
  const {id} = req.params;
  try {
    const history = await History.findById(id);
    if(!history) {
      return res.status(404).send({error:'Invalid id to find a specific remitance history'});
    }
    res.status(200).send({history,})
  } catch (e) {
    console.log(e);
    console.log(e.message);
    res.status(404).send({error:'Failed to send remitance data.Please try again with valid data'});
  }
})


router.post('/history', ensureLoggedIn,  upload.single('avatar'), async (req,res) => {

  if(req.user.email !== process.env.ADMIN_EMAIL) {
    return res.status(401).send({
      message:'Your are not allowed to view/modify/upload the content of this page',
      type:'error',
    })
  }

  const {totalPound,totalTaka,sendingDate,exchangeRate,payingAgent,govtIncentive,pinNumber} = req.body;
  if(!req.file) {
    return res.status(406).send({
      message:'Please upload a receipt image too for a successfull entry!',
      type:'error'
    })
  }
  try {
    const history = new History({
      key:uuidv4(),
      pinNumber:pinNumber,
      totalPound:parseInt(totalPound),
      totalTaka:parseInt(totalTaka),
      sendingDate,
      exchangeRate:parseInt(exchangeRate),
      payingAgent,
      govtIncentive:parseInt(govtIncentive)
    });
    
    history.receiptImage = req.file.buffer;
    await history.save();
    res.status(201).send(history);
  } catch (e) {
    console.log(e);
    console.log(e);
    res.status(406).send({
      message:'Please submit all ther required information and always check weather pin number is unique or not',
      type:'error'
    })
  }
})


router.get('/receipt_image/:key', ensureLoggedIn , async (req,res) => {
    if(req.user.email !== process.env.ADMIN_EMAIL) {
      res.status(401);
      fs.createReadStream('./img/receipt-sample.png').pipe(res);
      return;
    }
    const {key} = req.params;
    try {
      const history = await History.findOne({key});
      if(!history || !history.receiptImage) {
        return res.status(404).send(Buffer.from('no image has been saved'))
      }
      const inStream = new Readable({
        read() {}
      });
      inStream.push(history.receiptImage); 
      inStream.push(null);
      inStream.pipe(res);     
    } catch(e) {
      console.log(e);
    }
})

router.delete('/receipt_image/:key', ensureLoggedIn, async (req,res) => {
  if(req.user.email !== process.env.ADMIN_EMAIL) {
    return res.status(401).send({
      message:'You do not have permission to do the action',
      type:'error'
    });
  }
  const {key} = req.params;
  try {
    const history = await History.findOne({key:key});
    if(!history) {
      return res.status(404).send({
        message:'Could not find a remitance hisotry to delete',
        type:'error',
      });
    }
    await history.remove();
    res.send({
      message:'successfully deleted the document',
      type:'success',
    })
  } catch (e) {
    console.log(e.message);
  }
})




module.exports = router;