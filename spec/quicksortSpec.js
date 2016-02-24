'use strict';

const mocha = require('mocha'),
      expect = require('Chai').expect,
      quicksort = require('../toy-problems/quicksort.js');

module.exports = describe('Quicksort', () => {

  it('should return an error if input is not an array', () => {
    let input = 'not an array';
    expect(quicksort.bind(null, input)).to.throw('Error, input is not an array!');
  });

  it('should sort an unsorted array', () => {
    let array = [6, 3, 8, 1, 9, 25, 15, 58, 0, 100, 75, 4, 2];
    let secondArray = [4, 42, 7, 3, 2, 65, 5224, 65, 2, -1, 8];
    expect(quicksort(array)).to.equal(array.sort());
    expect(quicksort(secondArray)).to.equal(secondArray.sort());
  });
});
