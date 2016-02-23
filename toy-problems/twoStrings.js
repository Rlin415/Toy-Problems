"use strict";

/*

You are given two strings, A and B. Find if there is a substring that appears in both A and B.

Sample Input: twoStrings(hello, world)
Sample Output: 'YES'

Sample Input: twoStrings(hi, world)
Sample Output: 'NO'

Explanation:

For the 1st test case, the letter o is common between both strings, hence the answer YES. (Furthermore, the letter l is also common, but you only need to find one common substring.)
For the 2nd test case, hi and world do not have a common substring, hence the answer NO.

*/


function twoStrings(str1, str2) {
  let str1Chars = {};

  for (let i = 0; i < str1.length; i++) {
    str1Chars[str1[i]] = str1[i];
  }

  for (let i = 0; i < str2.length; i++) {
    if (str1Chars[str2[i]]) return 'YES';
  }
  return 'NO';
}

module.exports = twoStrings;
