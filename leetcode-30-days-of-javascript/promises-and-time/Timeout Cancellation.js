/**
 * Creates a cancellable function that executes after a specified delay.
 * 
 * @param {Function} fn - The function to be executed.
 * @param {Array} args - The arguments to be passed to the function.
 * @param {number} t - The delay in milliseconds before the function is executed.
 * @return {Function} A cancel function that can be called to prevent the execution of fn.
 */
var cancellable = function(fn, args, t) {
  let timeoutId;

  // Schedule the function fn to run after t milliseconds
  timeoutId = setTimeout(() => {
    fn(...args);
  }, t);

  /**
   * Cancels the scheduled function execution.
   * @return {void}
   */
  return function cancelFn() {
    clearTimeout(timeoutId); // Cancel the timeout if it hasn't executed yet
  };
};

// Example Usage:
const result = [];

/**
 * Example function that multiplies its input by 5.
 * @param {number} x - The input number.
 * @return {number} The result of x * 5.
 */
const fn = x => x * 5;

const args = [2],
  t = 20,
  cancelTimeMs = 50;

const start = performance.now();

/**
 * Logs the execution time and result of the function.
 * @param {...*} argsArr - The arguments to be passed to fn.
 */
const log = (...argsArr) => {
  const diff = Math.floor(performance.now() - start);
  result.push({ time: diff, returned: fn(...argsArr) });
};

const cancel = cancellable(log, args, t);

const maxT = Math.max(t, cancelTimeMs);

// Cancel after 50ms
setTimeout(cancel, cancelTimeMs);

// Log the result after the maximum time has elapsed
setTimeout(() => {
  console.log(result); // [{"time":20,"returned":10}] or [] if canceled
}, maxT + 15);
