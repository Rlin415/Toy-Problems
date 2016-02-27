"use strict";

const mocha = require('mocha'),
      expect = require('Chai').expect,
      radixSort = require('../toy-problems/radixSort.js');

module.exports = describe('Radix Sort', () => {

  it('should return an error if input is not an array', () => {
    let input = 'not an array';
    expect(radixSort.bind(null, input)).to.throw('Error, input is not an array!');
  });

  it('should sort an unsorted array', () => {
    let array = [66, 31, 836, 154, 926, 250, 152, 587, 0, 109, 75, 423, 278];
    let secondArray = [478, 422, 712, 378, 246, 651, 524, 658, 412, 165, 839];
    expect(radixSort(array)).to.equal(array.sort());
    expect(radixSort(secondArray)).to.equal(secondArray.sort());
  });
});
