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
  let counter = [[]];
  let longest = findLongest(arr);
  let mod = 10;
  let dev = 1;
  for (let i = 0; i < longest; i++, dev *= 10, mod *= 10) {
      for(let j = 0; j < arr.length; j++) {
          let bucket = parseInt((arr[j] % mod) / dev);
        if(counter[bucket] == null) {
          counter[bucket] = [];
        }
        counter[bucket].push(arr[j]);
      }
      let pos = 0;
      for(let j = 0; j < counter.length; j++) {
          let value = null;
        if(counter[j]!= null) {
          while ((value = counter[j].shift()) != null) {
              arr[pos++] = value;
          }
        }
      }
  }
  return arr;
}

function findLongest(arr) {
  let longest = 1;
  arr.forEach((num, i) => {
    num = num.toString();
    if (num.length > longest) longest = num.length;
  });
  return longest;
}

module.exports = radixSort;
