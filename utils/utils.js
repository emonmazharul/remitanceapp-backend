const chalk = require('chalk');
const axios = require('axios');
const History = require('../model/historyModel');


async function get_todays_amount(amount) {
  // convert rate from one to another
  // let url  = `https://api.apilayer.com/exchangerates_data/convert?from=gbp&to=bdt&amount=${amount}`;
  let url = `https://v6.exchangerate-api.com/v6/${process.env.CURRENCY_API_KEY}/pair/GBP/BDT/${amount}`;
  try {
    const {data} = await axios.get(url)
    const result =  { 
      amount: data.conversion_result,
      rate:data.conversion_rate,
    };
    return result;
  } catch (e) {
    console.log(chalk.bgRedBright(e.message));
    return {amount:0,rate:0};
  }
}

async function get_all_todays_amount() {
  const all_histories = await History.find();
  return async function() {
    try {
      for(let i=0; i<all_histories.length; i++) {
        const today_amount = await get_todays_amount(all_histories[i].totalPound);
        all_histories[i].todayAmount = today_amount.amount;
        all_histories[i].todayRate = today_amount.rate;
      }
      console.log(all_histories[1].todayAmount)
      return all_histories;
    } catch (e) {
      console.log(e);
      return [];
    }
  }
}

async function example_func(){
  return {amount:400,rate:119};
}



module.exports = {
  get_all_todays_amount,
  get_todays_amount,
  example_func
}



// fetch("https://api.apilayer.com/exchangerates_data/convert?to={to}&from={from}&amount={amount}", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));