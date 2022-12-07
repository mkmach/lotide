This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mkmach/lotide`

**Require it:**

`const _ = require('@mkmach/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: assertion for two arrays if they are equal
* `assertEqual`: assertion for two values if they are equal
* `assertObjectsEqual`: assertion for two objects if they are equal
* `countLetters`: returns the the counts of the letters from a string
* `countOnly`: takes items and returns the counts for those specific items
* `eqArrays`: compares values of two arrays
* `eqObjects`: compares values of two objects
* `findKey`: scans an object and returns the first key that satifies the callback condition
* `findKeyByValue`: seraches for a key in an object where its value matches the arugment
* `flatten`: takes multiple arrays and flattens into a single array
* `head`: returns the first element of an array
* `index`: list of the functions in this library as an object
* `letterPositions`: returns the index of each character of a given string
* `map`: creates a new array with the results of calling a provided funcion on ever element in the called array
* `middle`: reutnrs the middle element(s) of an array
* `tail`: returns every element less the first element of the array
* `takeUntil`: returns a slice of the array with the elements at the beginning of the array
* `without`: removes elements from an array
