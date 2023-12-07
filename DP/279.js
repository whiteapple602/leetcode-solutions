// Perfect Squares
/* Given an integer n, return the least number of perfect square numbers that sum to n.

A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not. */

/* Example 1:

Input: n = 12
Output: 3
Explanation: 12 = 4 + 4 + 4.
Example 2:

Input: n = 13
Output: 2
Explanation: 13 = 4 + 9. */

/**
 * @param {number} n
 * @return {number}
 */


var numSquares = function(n) {
    const memo = [0]
    
    while(memo.length <= n) {
        const m = memo.length
        let cntSquare = 10001
        for(let i = 1; i * i <= m; i ++) {
            cntSquare = Math.min(cntSquare, memo[m - i * i] + 1)
        }

        memo.push(cntSquare)
    }

    return memo[n]
};

console.log(numSquares(70))