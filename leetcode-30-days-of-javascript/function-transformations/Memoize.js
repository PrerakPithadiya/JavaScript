/**
 * Memoizes a function to cache its results and track the number of calls.
 * @param {Function} fn - The function to be memoized.
 * @returns {Function} A memoized version of the input function.
 */
function memoize(fn) {
  const cache = new Map();
  let callCount = 0;

  /**
   * The memoized function that caches results and counts calls.
   * @param {...*} args - The arguments passed to the original function.
   * @returns {*} The result of the function call, either from cache or newly computed.
   */
  const memoizedFn = (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    callCount++;
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };

  /**
   * Returns the number of times the original function has been called.
   * @returns {number} The number of function calls.
   */
  memoizedFn.getCallCount = () => callCount;

  return memoizedFn;
}

// Example usage:

/**
 * Calculates the sum of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 */
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);

/**
 * Calculates the factorial of a number.
 * @param {number} n - The number to calculate factorial for.
 * @returns {number} The factorial of n.
 */
const factorial = n => (n <= 1 ? 1 : n * factorial(n - 1));
const memoizedFactorial = memoize(factorial);

/**
 * Calculates the nth Fibonacci number.
 * @param {number} n - The index of the Fibonacci number to calculate.
 * @returns {number} The nth Fibonacci number.
 */
const fib = n => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));
const memoizedFib = memoize(fib);

// Example 1: Using Sum
console.log(memoizedSum(2, 2)); // 4
console.log(memoizedSum(2, 2)); // 4 (cached)
console.log(memoizedSum.getCallCount()); // 1
console.log(memoizedSum(1, 2)); // 3
console.log(memoizedSum.getCallCount()); // 2

// Example 2: Using Factorial
console.log(memoizedFactorial(2)); // 2
console.log(memoizedFactorial(3)); // 6
console.log(memoizedFactorial(2)); // 2 (cached)
console.log(memoizedFactorial.getCallCount()); // 2
console.log(memoizedFactorial(3)); // 6 (cached)
console.log(memoizedFactorial.getCallCount()); // 2

// Example 3: Using Fibonacci
console.log(memoizedFib(5)); // 8
console.log(memoizedFib.getCallCount()); // 1
