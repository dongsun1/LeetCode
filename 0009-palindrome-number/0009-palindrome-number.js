/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const palindrome = x.toString().split('').reverse().join('')
    return x == palindrome
};