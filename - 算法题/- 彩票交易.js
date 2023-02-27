/**
 You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to  sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

 */

// 给定一个价格数组，其中价格[i]是给定股票在第i天的价格。
// 你想通过选择某一天买入一只股票，并在未来选择不同的一天卖出这只股票来最大化你的利润。
// 回报的最大利润，你可以实现从这次交易。如果你不能获得任何利润，就返回0。

// 示例1:
// 输入:价格= [7,1,5,3,6,4]
// 输出:5
// 解释:第2天买入(价格= 1)，第5天卖出(价格= 6)，收益= 6-1 = 5。
// 请注意，在第2天购买和第1天出售是不允许的，因为你必须在出售之前购买。

// 示例2:
// 输入:价格= [7,6,4,3,1]
// 输出:0
// 解释:在这种情况下，没有交易，最大利润= 0。


function getMaxiumProfit(prices) {

    let profit = 0;

    for (var i = 0; i <= prices.length; i++) {

        for (var j = i + 1; j <= prices.length; j++) {

            let buyPrice = prices[i]

            let sellPrice = prices[j]

            if (((sellPrice - buyPrice) - profit) > 0 && (sellPrice - buyPrice) > 0) {

                profit = sellPrice - buyPrice

            }

        }

    }

    return profit

}