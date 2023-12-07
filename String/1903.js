/* Largest Odd Number in String

You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

A substring is a contiguous sequence of characters within a string. */

/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    const len = num.length
    for(let i = len - 1; i >= 0; i --) {
        if(Number(num[i]) % 2 )  return num.substring(0, i + 1)
    }

    return ""
};

console.log(largestOddNumber("52"))
console.log(largestOddNumber("4206"))
console.log(largestOddNumber("35427"))