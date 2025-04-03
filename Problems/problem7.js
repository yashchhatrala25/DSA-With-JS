const maxProfit = (price) => {
  let minPrice = price[0];
  let maxProfit = 0;
  for (let i = 1; i < price.length; i++) {
    const currentPrice = prices[i];

    // Update minimim price if the lower price is founf
    minPrice = Math.min(minPrice, currentPrice);

    const potentialPrice = currentPrice - minPrice;

    maxProfit = Math.max(maxProfit, potentialPrice);
  }
  return maxProfit;
};

const prices = [7, 1, 5, 3, 6, 4];
const profit = maxProfit(prices);
console.log("Max Profit: ", profit);
