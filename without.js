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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅  Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

//2 aruments sources and itemsToRemove
//return new array therefore make new variable for accumulator starting with empty array
//loop through given array, and loop through the items you want to remove at the same time
//case 1. if any of the elements in array === itemstoremove, stop looping
//case 2. if any of the elements !== match, we want to push that to our accumulator 
//return the new array (which should be the source array minus the matching items in the second argument

const without = function (array, itemsToRemove) {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    for (let r = 0; r < itemsToRemove.length; r++) {
      if (array[i] === itemsToRemove[i]){
        break;
      }
      if (array[i] !== itemsToRemove[i]){
        newArray.push(array[i])
        break;
      }  
    }
  }
  return newArray;
}

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);