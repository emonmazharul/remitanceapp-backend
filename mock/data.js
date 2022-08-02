const mock_history = [
  {
    key:'mock_key_1',
    totalPound : 693.07,
    totalTaka:82891,
    sendingDate:new Date('2022-06-30').toDateString(),
    exchangeRate:119.6000,
    payingAgent:'Any bank',
    govtIncentive: 200,
    todayAmount:0,
    todayRate:0
  },
  {
    key:'mock_key_2',
    totalPound : 320.07,
    totalTaka:56076,
    sendingDate:new Date('2022-05-30').toDateString(),
    exchangeRate:116.6000,
    payingAgent:'Any bank',
    govtIncentive: 100,
    todayAmount:0,
    todayRate:0
  },
  {
    key:'mock_key_3',
    totalPound : 520.07,
    totalTaka:66076,
    sendingDate:new Date('2022-04-30').toDateString(),
    exchangeRate:115.6000,
    payingAgent:'Any bank',
    govtIncentive: 150,
    todayAmount:0,
    todayRate:0
  },
  {
    key:'mock_key_4',
    totalPound : 400.07,
    totalTaka:44076,
    sendingDate:new Date('2022-04-30').toDateString(),
    exchangeRate:114.6000,
    payingAgent:'Any bank',
    govtIncentive: 120,
    todayAmount:0,
    todayRate:0
  }
]

function add_mock_history(history) {
  all_history.push(history);
}

module.exports = {
  mock_history,
  add_mock_history,
}