const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

assertArraysEqual([1, 4, 3, 6, 8], [1, 2, 3, 60, 9]);
assertArraysEqual([35, 2, 22, 6, 8], [35, 2, 22, 6, 8]);