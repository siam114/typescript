"use strict";
const add = (a, b) => {
    return a + b;
};
console.log(add(2, 3));
const getLargerName = (name1, name2) => {
    if (name1.length > name2.length) {
        return name1;
    }
    return name2;
};
const biggerName = getLargerName('alis', 'smsiam');
console.log(biggerName);
