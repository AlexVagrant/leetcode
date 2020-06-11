var coinChange = function(coins, amount) {
  let res = new Array(amount+1).fill(Infinity);
  res[0] = 0;

  for (let coin of coins) {
    for (let i = coin; i < amount+1; i++) {
      if (i-coin >= 0) {
        res[i] = Math.min(res[i], res[i-coin]+1);
      }
    }
  }
  console.log(res[amount])
  return res[amount] === Infinity ? -1 : res[amount]
};
coinChange([1,3,5], 7);

