"use strict";

/*

Given an unsorted array, return a sorted version using quicksort

Sample Input: [6, 3, 8, 1, 9, 25, 15, 58, 0, 100, 75, 4, 2]
Sample Output: [0, 1, 2, 3, 4, 6, 8, 9, 15, 25, 58, 75, 100]

Explanation:

Input is not ordered from least to greatest. After using quicksort, the output is ordered from least to greatest.

*/

function quicksort(arr, left, right) {
  if (!Array.isArray(arr)) throw 'Error, input is not an array!';

  left = left || 0;
  right = right || arr.length - 1;

  let index = partition(arr, left, right);

  if (left < index - 1) {
    quicksort(arr, left, index - 1);
  }

  if (right > index) {
    quicksort(arr, index, right);
  }

  return arr;

}

function partition(arr, left, right) {
  let pivot = arr[Math.floor((left + right) / 2)];

  while (left <= right) {
    while (arr[left] < pivot) left++;
    while (arr[right] > pivot) right--;

    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }

  return left;

}

function swap(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

module.exports = quicksort;
