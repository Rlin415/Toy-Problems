"use strict";

/*

Given an unsorted array, return a sorted version using radix sort

Sample Input: [6, 3, 8, 1, 9, 25, 15, 58, 0, 100, 75, 4, 2]
Sample Output: [0, 1, 2, 3, 4, 6, 8, 9, 15, 25, 58, 75, 100]

Explanation:

Input is not ordered from least to greatest. After using radix sort, the output is ordered from least to greatest.

*/

function radixSort(arr) {
  if (!Array.isArray(arr)) throw 'Error, input is not an array!';
  let longest = findLongest(arr);
  let holder = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let tempArr = [];

  for (let i = longest; i > 0; i--) {
    arr.forEach((num) => {
      let subNum = num[longest - 1];
      if (!subNum) holder[0]++;
      else holder[subNum]++;
    });
    holder.forEach((num, i, arr) => {
      let nextNum = arr[i + 1];
      if (nextNum ===  undefined) return;
      arr[i + 1] = num + nextNum;
    });
  }
}

function findLongest(arr) {
  let longest = 1;
  arr.forEach((num, i) => {
    num = num.toString();
    arr[i] = num;
    if (num.length > longest) longest = num.length;
  });
  return longest;
}

module.exports = radixSort;
