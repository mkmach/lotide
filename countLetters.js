const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const countLetters = function(string) {
  let result = {};
  for (let letters of string) {
    // console.log(letters)
    if (letters !== " ") {
      if (result[letters]) {
        result[letters] += 1;
      } else {
        result[letters] = 1;
      }
    }

  }
  return result;
};

console.log(countLetters("hhhekjsodifusefsdHhi there"));
