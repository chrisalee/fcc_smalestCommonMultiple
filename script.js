// Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
  const [num1, num2] = arr.sort((a, b) => a - b);
  const range = Array(num2 - num1 + 1).fill(0).map((_, i) => i + num1);
    
  function greatestCommonDenominator(a, b) {
    if(b === 0) {
      return a;
    } else {
      return greatestCommonDenominator(b, a % b)
    }
  }

  function leastCommonMultiple(a, b) {
    return a * b / greatestCommonDenominator(a, b)
  }

  return range.reduce((multiple, curr) => leastCommonMultiple(multiple, curr));
}

smallestCommons([5, 1]);
