"use strict";

/*

Given a word 'w', rearrange the letters of 'w' to construct another word 's' in such a way that 's' is lexicographically greater than 'w'. In case of multiple possible answers, find the lexicographically smallest one among them.

Sample Input:
ab
bb
hefg
dhck
dkhc

Sample Output:
ba
no answer
hegf
dhkc
hcdk
Explanation

Test case 1:
There exists only one string greater than ab which can be built by rearranging ab. That is ba.
Test case 2:
Not possible to rearrange bb and get a lexicographically greater string.
Test case 3:
hegf is the next string lexicographically greater than hefg.
Test case 4:
dhkc is the next string lexicographically greater than dhck.
Test case 5:
hcdk is the next string lexicographically greater than dkhc.

*/

function lexicograph(input) {
    input = input.split('');
    for (let i = input.length - 1; i > 0; i--) {
        let curr, before, sub, result, index;
        before = input[i - 1];
        curr = input[i];
        if (curr > before) {
            sub = input.slice(i).sort();
            index = nextBiggest(before, sub);
            input[i - 1] = sub[index];
            sub[index] = before;
            sub = sub.sort().join('');
            input.splice(i, sub.length, sub);
            result = input.join('');
            return console.log(result);
        }
    }
    console.log('no answer');
}

function nextBiggest(before, sub) {
    for (let i = 0; i < sub.length; i++) {
        if (sub[i] > before) return i;
    }
}
