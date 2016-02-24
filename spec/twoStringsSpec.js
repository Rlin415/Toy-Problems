'use strict';

const mocha = require('mocha'),
      expect = require('Chai').expect,
      twoStrings = require('../toy-problems/twoStrings.js');

module.exports = describe('Two Strings', () => {

  it('should return YES if there is a common substring', () => {
    let string1 = 'hello',
        string2 = 'world';

    expect(twoStrings(string1, string2)).to.equal('YES');
  });

  it('should return NO if there is no common substring', () => {
    let string1 = 'hi',
        string2 = 'world';

    expect(twoStrings(string1, string2)).to.equal('NO');
  });
});
