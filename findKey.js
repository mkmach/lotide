const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const findKey = function (obj, cb) {
  for (const keys of Object.keys(obj)) {
    if (cb(obj[keys])) {
      return keys
    }
  }
}

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"


// const findKeyByValue = function(obj, value) {
//   for (const keys of Object.keys(obj)) {
//     if (obj[keys] === value) {
//       return keys;
//     }
//   }
// };