const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {

    //key is the key of the object, object1[key] is the value, comparing the value of the same key

    //make sure it is an array, then loop each key in one object to ensure that same key in the other object

    for (let i in object1) {
      if (Array.isArray(object1[i]) && Array.isArray(object2[i])) {
        if (!eqArrays(object1[i], object2[i])) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
};

const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};
console.log(assertEqual(eqObjects(ab,ba),false));
const abc = { a: "1", b: "2", c: "3"};
console.log(assertEqual(eqObjects(ab,abc),false));
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertEqual(eqObjects(cd,dc),true));
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual(eqObjects(cd,cd2),false));