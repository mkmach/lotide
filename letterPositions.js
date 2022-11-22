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

const letterPositions = function(str) {
  const results = {};

  for (let i = 0; i < str.length; i++) {
   const letter = str.charAt(i)
    if (results[letter]) {
      results[letter].push(i)
    } else {
      results[letter] = []
      results[letter].push(i)
    }
    }
  return results
};

console.log(letterPositions("Michael"))
console.log(assertArraysEqual(letterPositions("hello").e, [1]));;


//loop through argument
// check if element exists in results obj
// if no, push element to obj,
  //results[element] = [indexOf(element)]
// if yes, add the index 
  // results[element].push(indeOf(element))


//indexOf ?
// use charAT? , push the result into object
