const middle = require('../middle');
const assert = require('chai').assert;

// console.log(middle([1, 252]));
// console.log(middle([53, 12, 838]));
// console.log(middle([213, 2, 62, 49]));
// console.log(middle([1, 2, 3, 4])) // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

describe("#middle", () => {
  it("should return [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("should return [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
});
