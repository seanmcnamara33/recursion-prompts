/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120

// Pseudocode
// create result variable
// base cases
// if n is less than zero, return null
// if n is less than two, set result to 1
// recursive case
// set result equal to n * the result of factorial(n - 1)
// return result

var factorial = function(n) {
  var result;
  if (n < 0) {
    return null;
  }
  if(n < 2) {
    result = 1;
  } else {
    result = n * factorial(n - 1);
  }
  return result;
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21

// add all integers in an array together, recursively

// tests already written

// I - array of ints
// O - integer
// C - must use recursion
// E - return 0 for empty array, should accept neg and pos numbers

// High Level Strategy - create sum variable, base cases are if array is empty return 0 and if
// current element is in last position in index array, add that number to sum

// Pseudocode
// create result variable and set it to 0
// base case
// if the type of the current input element(array) is a number, add it to result
// recursive case
// iterate over array and add each item to the result
// return result
var sum = function(array) {
  var result = 0;
  if (typeof array === 'number') {
    result += array;
  } else {
  array.forEach(function(item) {
    result += sum(item);
  });
}
  return result;
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15

// go through each element in an array of arrays and add its value to a result

// tests already written

// I - array of arrays
// O - integer
// C - use recursion, no native flatten methods, dont mutate array
// E - if array empty, return 0

// High level strategy - iterate over array, if value is not an array, add it to result,
// if it is an array, iterate over that, etc

// Pseudocode
  // create result variable
  // base case
  // if current value is a number, add it to result
  // recursive case
  // call arraySum on each item in array
    // return result

var arraySum = function(array) {
  var result = 0;
  if (typeof array === 'number') {
    result += array;
  }
  else {
    array.forEach(function(item) {
      result += arraySum(item);
    });
  }
  return result;
};

// 4. Check if a number is even.

// tests already written

// I - number
// O - boolean
// C - cant use modulo, use recursion
// E - none

// High level strategy - if n is 0 return true if n is 1 return false if its greater
// than 1 return function with n - 2

// Pseudocode
  // convert n to positive
  // base cases
  // if n is 0 - return true
  // if n is 1 - return false
  // recursive case
  // if n > 1 - return function called with n - 2

var isEven = function(n) {
  n = Math.abs(n);
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else {
    return isEven(n - 2);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21

// sum every number from n - 1 to zero

// tests already written

// I - number
// O - number
// C - recursion
// E - negative numbers

// High Level Strategy -  create result variable, depending on if n is greater than or less than
// 0, add or subtract 1 from n and then recursively call the function with n +/- 1 until 0
// then return result

// Pseudocode
  // base case
  // if value is zero --- return 0
  // recursive cases
  // if n is greater than zero - subtract recursive call from result
  // if n is less than zero -

var sumBelow = function(n) {
  var result;
  if (n === 0) {
    return 0;
  }
  else if (n > 0) {
    result =  n-1 + sumBelow(n - 1);
  } else {
    result = n+1 + sumBelow(n + 1);
  }
  return result;
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]

// populate an array with all of the values between two inputted values

// tests already written

// I - two number inputs
// O - array
// C - must use recursion, either integer can be larger or negative
// E - if none in range, return empty array

// High Level Strategy - base case is if num is equal to y input return the result, else add current value to array

// Pseudocode

var range = function(x, y) {
  if (x < y) {
    return x+1 >= y ? [] : [x+1].concat(range(x+1, y));
  }
  else {
    return y+1 >= x ? [] : [x - 1].concat(range(x-1, y));
  }
  // if (x+1 >= y) {
  //   return [];
  // }
  // if (y+1 >= x) {
  //   return [];
  // }
  // if (x + 1 <= y) {
  //   var arr = range(x, y - 1);
  //   arr.push(y - 1);
  //   return arr;
  // }
  // if (x - 1 >= y) {
  //   var arr = range(x - 1, y);
  //   arr.push(x - 1);
  //   return arr;
  // }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number

// compute the value of a number multiplied by itself x number of times

// tests are already written

// I - two numbers
// O - number
// C - recursion
// E - return 0 when exp is 0, returns base when exp is 1

// High Level Strategy - iterate from 0 to exp, once there, return base, in recursive case
// return base * recursive call result

// Pseudocode
// create result variable
// edge case
// if exp is 0, return 1
// base case

// if exp is equal to 1, return base
// recursive case
// result is equal to result plus base times recursive call
// return result

var exponent = function(base, exp) {
  var result = base;
  if (exp === 0) {
    return 1;
  }
  if (exp === 1) {
    return base;
  }
  if (exp > 0) {
    result *= exponent(base, exp - 1);
  } else {
    result *= 1/exponent(base, -1 * (exp - 1));
  }
  return result;
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false

// check if a number is equal to a lesser number squared

// tests already written

// I - number
// O - boolean
// C - must use recursion
// E - 1^2?

// High Level Strategy - divide n by half, if that number multiplied by itself is equal to n,
// return true, if not, reduce n by one and call the function again

// Pseudocode
var powerOfTwo = function(n) {
  // base (edge) case of if n is one
  // if (n === 1) {
  //   return true;
  // }
  // // set n equal to n divided by 2
  // n = n/2;
  // // if n is now less than one, set it equal to 0 (this will help with efficiency)
  // if (n < 1) {
  //   n = 0;
  // }
  // // base case
  // if (n === 2) {
  //   return true;
  // }
  // // recursive case
  // else if (n > 0) {
  //   return powerOfTwo(n)
  // }
  // // base case if n is equal to
  // else {
  //   return false;
  // }
  return n === 1 ? true : (n < 1 ? false : powerOfTwo(n/2));

  // // create variable to track if square or not(?) and set to false ** MAYBE DONT NEED
  // var isSquare;
  // var num = n;
  // // create inner function with parameter of num and n
  // var innerFunc = function(num, n) {
  //   // if num === 0, return false
  //   if (num === 0) {
  //     return false;
  //   }
  //   // if num/2 * num/2 = n -- return true
  //   if (num * num === n) {
  //     return true;
  //   }
  //   // else - call innerFunction again with num variable decremented by one
  //   else {
  //     isSquare = innerFunc(num - 1, n);
  //   }
  //   return isSquare;
  // }
  // return innerFunc(num, n);
};

// 9. Write a function that reverses a string.

// tests are written

// I - string
// O - string
// C - no native reverse
// E - none

// High Level Strategy - iterate over string, if strings length is one, push last letter and return, if not, call function recursively

// Pseudocode
var reverse = function(string) {
  // base case
  if (string.length === 0) {
    return '';
  } else {
    return reverse(string.slice(1)) + string.charAt(0);
  }
};

// 10. Write a function that determines if a string is a palindrome.

// figure out if word is spelled same forwards and backwards

// tests already written

// I - string
// O - boolean
// C - must use recursion
// E - spaces and capital letters

// High Level Strategy - compare first and last chars in string, if equal - return true, if not equal, return false
// if base case ever returns false, do not call recursive case again

// Pseudocode
// lowercase the string
// base cases
// if char at 0 and final char are NOT equal, return false
// recursive case
// if char at 0 and final char ARE equal, call recursive function with string without first and last index and return

var palindrome = function(string) {
  if (string.length <= 1) {
    return true;
  }
  string = string.toLowerCase();
  if (string[0] !== string[string.length - 1]) {
    return false;
  }
  if (string[0] === string[string.length - 1]) {
    return palindrome(string.slice(1, string.length - 1));
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4

// determine remainder without using modulo and using recursion

// tests are already written

// I - two numbers
// 0 - number
// C - cant use modulo, complex math, must use recursion
// E - negative numbers

// High Level Strategy - subtract y from x until x is smaller than y, then subtract x from y and return that value

// Pseudocode
// Base Cases
// if y is zero, return NaN
// if x is negative - make x positive and call modulo on it and y (eventually
// you will convert its sign to negative again by putting a - infront of the modulo call)
// if y is negative - make y positive and call modulo on pos x and pos y
// now both are pos, if x ends up being smaller than y, return x
// call modulo with x - y, and y, and return

var modulo = function(x, y) {

    if (y === 0) {
      return NaN;
    }

    if (x < 0) {
      return -modulo(-x,  y);
    }

    if (y < 0) {
      return  modulo( x, -y);
    }

    if (x < y) {
      return  x;
    }

    return modulo(x - y, y);
};


// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.

// multiply two numbers recursively without *

// tests already written

// I - 2 numbers
// O - 1 number
// C - must use recursion, cant use complex math
// E - pos and pos, neg and neg, pos and neg, neg and pos

// High Level Strategy - add x to itself y number of times - if not base cases, call function with same x and decremented y

// Pseudocode
  // base case
  // if x or y are zero -- return 0
  // if x is neg, convert to pos and call function with and convert entire call to negative
  // if y is neg, conver to pos and call function with and convert entire call to negative
  // base case
  // call recursive function with same x and decremented y and add to x

var multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  }
  if (x < 0) {
    return -multiply(-x, y);
  }
  if (y < 0) {
    return -multiply(x, -y);
  }
  if (y === 1) {
    return x;
  }
  return x + multiply(x, y - 1);
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).

// find the result of dividing two numbers together

// tests are already written

// I - two numbers
// O - number
// C - must use recursion, can't use complex math, ignore decmials (must round w/out Math.round?)
// E - if y is 0 return NaN, if x is zero return 0, if x is smaller than y return 0
// E - if x is neg return neg result, if y is neg return neg result

// High Level Strategy - subtract y from x until x is smaller than y and return 1 (base case)
// each function call should consist of x + function call of x - y , y

// Pseudocode
// edge cases
// if y is zero - return NaN
// if x is zero or y is less than x - return zero
// if y is one - return x
// if x is neg - convert to pos
// if y is neg - convert to pos
// base case
// if x is less than y, return 1
// recursive call
// call multiply with x - y and y, and add 1 to it

var divide = function(x, y) {
  if (y === 0) {
    return NaN;
  }
  if (x === 0 || y > x) {
    return 0;
  }
  if (y === 1) {
    return x;
  }
  if (x < 0) {
    return -divide(-x, y);
  }
  if (y < 0) {
    return -divide(x, -y);
  }
  if (x - y <= y) {
    return 1;
  }
  return 1 + divide(x - y, y);
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm

// find common divisor between two numbers

// tests already written

// I - 2 numbers
// O - 1 number
// C - must use recursion
// E - negative integers return null

// High Level Strategy - set function so x is the larger number,
// call function with y in x position, and result of x modulo y in y position, if y is ever 0, return x

// Pseudocode
// edge cases
// if x OR y are negative - return null
// check if y is largest and flip if so
// base case
// if y is zero -- return x
// recursive case
// call gcd with y in x position, and x modulo y as y and return

var gcd = function(x, y) {
  if (x < 0 || y < 0) {
    return null;
  }
  if (y > x) {
    return gcd(y, x);
  }
  if (y === 0) {
    return x
  }
  return gcd(y, x % y);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true

// check if strings are the same

// tests already written

// I - 2 strings
// O - boolean
// C - must use recursion
// E - none

// High Level Strategy - check to see if str1 index 1 is same as str2 index 2, if so, call function again
// with incremented indexes, if they are never not equal, return false

// Pseudocode
// if str1 0 is NOT equal to str2 0 -- return false
// if str1 length && str2 length is equal to zero, return true
// if str1 0 is equal to str2 0 -- call function again with slices of each string from 1 to end

var compareStr = function(str1, str2) {
  if (str1[0] !== str2[0]) {
    return false;
  }
  if (str1.length === 0 && str2.length === 0) {
    return true;
  }
  if (str1[0] === str2[0]) {
    return compareStr(str1.slice(1), str2.slice(1))
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.

// create the 'split' array method using recursion

// tests already written

// I - string
// O - array
// C - must use recursion
// E - empty string returns empty array?

// High Level Strategy - base case is if the str length is 0 -- return empty array, if str length is not zero, return function call with
// str[0] pushed into it (pass string sliced from 1 to end as argument)

// Pseudocode

var createArray = function(str) {
  // base case
  // if str length is zero - return empty array
  if (str.length === 0) {
    return [];
  }
  // recursive case
  // if str length is NOT zero - call function again, should result in empty array, and push first index of string into it
  else {
    return createArray(str.slice(0, str.length - 1)).concat(str[str.length - 1]);
  }
};

// 17. Reverse the order of an array

// tests already written

// I - array
// O - array
// C - must use recursion
// E - empty array?

// High Level Strategy - base case - if array is empty - return empty array, if array NOT empty, return function call
// with array sliced from 1 to end as argument, and concat onto it arr at zero

// Pseudocode
// base case
// if array length is 0 - return empty array
// recursive case
// if array length is NOT 0, call reverseArr with array sliced from 1 to end as argument and concat it with the first el in array
var reverseArr = function(array) {
  if (array.length === 0) {
    return array;
  }
  else {
    return reverseArr(array.slice(1)).concat(array[0]);
  }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]

// based on inputs, build an array of specified length where each value is the same as the inputted value

// tests already written

// I - 2 numbers (a value, a length)
// O - array
// C - must use recursion
// E - none

// High Level Strategy - base case - inputted length value becomes zero - return []
// recursive case - if inputted length value is NOT zero, concat value to the function call

// Pseudocode
// base case
// if length === 0 -- return []
// edge case
// if value is an array -- return buildLIst with same value and decremented length passe din, contatted with value wrapped in an array
// recursive case
// if length !== 0 -- return buildList with same value and decremented length passed in, concatted with value

var buildList = function(value, length) {
  if (length === 0) {
    return [];
  }
  else if (Array.isArray(value)) {
    return buildList(value, length - 1).concat([value])
  }
  else {
    return buildList(value, length - 1).concat(value);
  }
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']

// create an array with string values ranging from 0 to n in it, for multiples of three - output 'Fizz'
// for multiples of 5 -- output 'buzz'

// tests are already written

// I - number
// O - array
// C - must use recursion
// E - none (maybe if n is negative or 0)

// High Level Strategy - base case - n is equal to zero -- return [],
// recursive case 1 - if n modulo 5 is zero -- call function with decremented n passed in, and concat 'Buzz'
// recursive case 2 - else if n modulo 3 is zero -- call function with decremented n passed in, and concat 'Fizz'
// recursive case 3 - else if n modulo 3 is zero AND n modulo 5 is zero -- call function with decremented n passed in, and concat 'FizzBuzz'
// recursive case 4 - else - call function with decremented n passed in, and concat stringified version of n

// Pseudocode
// base case
// if n is zero -- return []
// recursive case 1 - if n modulo 3 is zero -- call function with decremented n passed in, and concat 'Fizz'
// recursive case 2 - else if n modulo 5 is zero -- call function with decremented n passed in, and concat 'Buzz'
// recursive case 3 - else if n modulo 3 is zero AND n modulo 5 is zero -- call function with decremented n passed in, and concat 'FizzBuzz'
// recursive case 4 - else - call function with decremented n passed in, and concat stringified version of n
var fizzBuzz = function(n) {
  if (n === 0) {
    return [];
  }
  if (n % 3 === 0 && n % 5 === 0) {
    return fizzBuzz(n - 1).concat('FizzBuzz');
  } else if (n % 3 === 0) {
    return fizzBuzz(n - 1).concat('Fizz');
  } else if (n % 5 === 0) {
    return fizzBuzz(n - 1).concat('Buzz');
  } else {
    return fizzBuzz(n - 1).concat(n.toString())
  }
};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2

// given an array and a value, count the number of times the value occurs in the array

// tests already written

// I - array, value(can be anything?)
// O - number
// C - must use recursion
// E - none

// High Level Strategy - base case is when array length is 0 -- return 0
// recursive case 1 - if array at zero is equal to the value, add one to function call (pass array slice 1 to function)
// recursive case 2 - if array at zero is NOT equal to value, call function with array slice 1

var countOccurrence = function(array, value) {
  if (array.length === 0) {
    return 0;
  } else if (array[0] === value) {
    return 1 + countOccurrence(array.slice(1), value);
  } else {
    return countOccurrence(array.slice(1), value);
  }
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]

// use recursion to re-create the native map function (do something to each item in an array)

// tests already written

// I - array, callback function
// O - array
// C - must use recursion, can't use native map, can't mutate original array
// E - none?

// High Level Strategy -
  // base case - if array length is zero, return empty array
  // recursive case - call function with slice of array from 1 and concat callback function with array zero passed in and return

// Pseudocode
  // base case - if array length is zero, return empty array
  // recursive case - call function with slice of array from 1 and concat callback function with array zero passed in and return

var rMap = function(array, callback) {
  if (array.length === 0) {
    return [];
  } else {
    return rMap(array.slice(0, array.length - 1), callback).concat(callback(array[array.length - 1]));
  }
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2

// go through an object of objects and count the number of times the inputted key occurs in entire object (all nests)

// tests already written

// I - obj(of objects), value
// O - number
// C - must use recursion
// E - empty object?

// High Level Strategy - traverse the object and its sub-objects and search for occurrences of the inputted value as key
// and add one. If the current value in object is an object, go into and look
// if current value is not an object and is the key, call the function + 1
// if current value is not an object and is not the key, call the function

// Pseudocode
// create count variable and set to zero
// loop over each item in object
  // base case
  // check if item is equal to key -- if it is, increment count by 1
  // recursive case
  // check if the value at current item is an object -- if it is
  // recursively call function with that value as obj and same key
// return count

var countKeysInObj = function(obj, key) {
  var count = 0;
  for (var item in obj) {
    if (item === key) {
      count++;
    }
    if (typeof obj[item] === 'object') {
      count += countKeysInObj(obj[item], key);
    }
  }
  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1

// go through an object of objects and count the number of times the inputted value occurs in entire object (all nests)

// tests already written

// I - object, value
// O - number
// C - must use recursion
// E - none

// High Level Strategy - create count variable - iterate through object - base case if value at current item is equal to
// the inputted value, increment count variable
// recursive case is if current value is an object, call function recursively with the current inner object and
// the inputted value as arguments

// Pseudocode
// create count variable and set to 0
// iterate over object
  // if the value of current key/value pair is equal to inputted value - increment count by 1
  // if the type of the value of current key/value pair is 'object' - recursively call function
  // with value of current key/value pair and inputted value as arguments and add result to count
// return count

var countValuesInObj = function(obj, value) {
  var count = 0;
  for (var item in obj) {
    if (obj[item] === value) {
      count++;
    }
    if (typeof obj[item] === 'object') {
      count += countValuesInObj(obj[item], value);
    }
  }
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.

// replace inputted oldKey in object with an inputted newKey value for every key

// tests already written

// I - object, value, value
// O - object
// C - must mutate input object, must use recursion
// E - none

// High Level Strategy - iterate over object, check if current key is equal to old key, if so
// replace it with new key (should work for nested arrays)

// Pseudocode
// loop over obj with for in
  // base case
  // if item is equal to oldKey, save its value to a variavle, delete the old property
  // and create a new one using the newKey as the key and the saved variable as the val
  // recursive case
  // if value of item is an object, call function again with value of current item
  // oldKey, and newKey as arguments

var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (var item in obj) {
    if (item === oldKey) {
      var val = obj[item];
      delete obj[item];
      obj[newKey] = val;
    }
    if (typeof obj[item] === 'object') {
      replaceKeysInObj(obj[item], oldKey, newKey)
    }
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.

// generate an array of fibonacci numbers starting from 1 and going until n

// tests already made

// I - number n
// O - array
// C - must use recursion
// E - first number 0 is not counted, zero/negative numbers return null

// High Level Strategy - fib numbers are a sum of the prior two numbers. iterate over n
// and push to array the sum of n and n - 1. For every new n, recursively call function

// Pseudocode - inner function method (not viable for tests)
// edge case
// if n is zero/negative
  // return null
// create result variable and populate with zero at first index
// create inner function and pass in n and result
  // base cases
  // if result length is 1
    // push 1 to result
  // if n is equal to 1
    // return
  // recursive case
  // if n is greater than 1
    // add result at last and second to last indices together and push to result
    // recursively call function with n - 1
// call inner function with n and result
// return result

// var fibonacci = function(n) {
//   if (n <= 0) {
//     return null;
//   }
//   var result = [0];
//   var innerFunction = function(n, result) {
//     if (result.length === 1) {
//       result.push(1);
//     }
//     if (n === 1) {
//       return;
//     }
//     if (n > 1) {
//       result.push(result[result.length - 1] + result[result.length - 2]);
//       innerFunction(n - 1, result);
//     }
//   }
//   innerFunction(n, result);
//   return result;
// };

// Pseudocode - 'Pure' Recursion
// edge case
// if n is negative or zero
  // return null
// if n is equal to 1
  // return [0, 1] array
// if n is greater than 1
  // recursively call fibonacci with n - 1 passed in and set equal to result variable
  // push result at last index and result at second to last index added together into result
  // return result
var fibonacci = function(n) {
  if (n <= 0) {
  return null;
  }
  if (n === 1) {
    return [0, 1];
  }
  if (n > 1) {
    var result = fibonacci(n - 1);
    result.push(result[result.length - 1] + result[result.length - 2]);
    return result;
  }
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2

// generate fibonacci number at n and return it

// tests already written

// I - number n
// O - number
// C - must use recursion
// E - return null for negative numbers

// High Level Strategy - create base cases for when n is 0 and n is one (these return 0 and 1)
// if n is greater than one, return fib n + fib n - 1

// Pseudocode
// edge case
// if n is negative
  // return null
// base cases
// if n is 0
  // return 0
// if n is 1
  // return 1
// recursive case
// if n is greater than 1
  // return function call n - 1 + function call n - 2

var nthFibo = function(n) {
  if (n < 0) {
    return null;
  }
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (n > 1) {
    return nthFibo(n - 1) + nthFibo(n - 2);
  }
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

// capitalize every word in an array recursively

// tests already written

// I - array of uncapitalized words
// O - array of capitalized words
// C - must use recursion
// E - None

// High Level Strategy - base case is capitalizing array at zero and return, recursive case
// is slicing array from 1 and passing that as array to function

// Pseudocode
// base case
// if array length is one
  // uppercase the word and return in an array (this decides form of final return)
// if array length is not one
  // create var and set equal to recursive call of function with array sliced from 0 to len - 1
  // (this returns last element capitalized)
  // now push last element of array capitalized into var
  // return var
var capitalizeWords = function(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  } else {
    var caps = capitalizeWords(array.slice(0, -1));
    caps.push(array.slice(array.length - 1)[0].toUpperCase());
    return caps;
  }
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  if (array.length === 1) {
    return [array[0].charAt(0).toUpperCase() + array[0].slice(1)];
  } else {
    var caps = capitalizeFirst(array.slice(0, -1));
    caps.push(array.slice(array.length - 1)[0].charAt(0).toUpperCase() + array.slice(array.length - 1)[0].slice(1));
    return caps;
  }
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10

// iterate through object and check to see if value in property is an even number, if it is
// add it to a sum variable and return

// tests already written

// I - object of nested objects
// O - number
// C - must use recursion
// E - none

// High Level Strategy - iterate over object. for base case, check to see if current items value is a number AND is even
// if so, add that number to a sum variable. Else if current items value is an object and not
// an array, call recursive function with current item passed in

// Pseudocode
// create sum variable
// iterate over obj
  // base case
  // if current items value is of type number && is even
    // add value to sum
  // else if current items value is an object and not an array
    // add value of recursive call of function to sum
// return sum
var nestedEvenSum = function(obj) {
  var sum = 0;
  for (var item in obj) {
    if (typeof obj[item] === 'number' && obj[item] % 2 === 0) {
      sum += obj[item];
    } else if (typeof obj[item] === 'object' && !Array.isArray(obj[item])) {
      sum += nestedEvenSum(obj[item]);
    }
  }
  return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]

// iterate through an array of arrays and if the type is not array, add it to a result

// tests already written

// I - array of arrays
// O - flat array
// C - must use recursion, can't use native js flatten
// E - empty array?

// High Level Strategy - create flat arr var, iterate over array, if current item is number
// push it to flat arr, if item is an array, recursively call function with current item
// passed in

// Pseudocode
var flatten = function(array) {
  // create flat arr var
  // iterate over arr
    // if type of current item is NOT an array
      // set flat equal to flat concat current item
    // else if current item IS an array
      // recursively call function with current item passed in and concat it with flat
      // and set flat equal to it
  // return flat arr
  var flat = [];
  for (var item of array) {
    if (!Array.isArray(item)) {
      flat = flat.concat(item);
    } else {
      flat = flat.concat(flatten(item));
    }
  }
  return flat;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}

// go through a string and count the number of times letters occur, recursively

// tests already written

// I - string, obj
// O - object
// C - must use recursion
// E - none

// High Level Strategy - base case is string length is zero, recursive case is if string length
// is not zero. When string is 0 (base case), add char at 0 in string to object as key and set
// its value equal to 1. If current char exists in object already, increment its value by one.

// Pseudocode
// create result obj
// iterate over string
  // base case
  // if string length is 1
    // create property in object with current char is key and 1 as value
  // if current key exists in object already
    // increment its value by one
  // recursive case
  // if string length is greater than 1
    // call function with str sliced from 1 to end and obj passed in
var letterTally = function(str, obj = {}) {
  if (str.length === 0) {
    return;
  }
  if (!obj[str[0]]) {
    obj[str[0]] = 1;
  } else if (obj[str[0]]) {
    obj[str[0]]++;
  }
  letterTally(str.slice(1), obj);
  return obj;
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
