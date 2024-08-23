/**
 * @file Interval Cancellation
 * @description This module provides a function to create cancellable interval executions.
 */

/**
 * Creates a cancellable interval execution of a given function.
 * @param {Function} fn - The function to be executed at intervals.
 * @param {Array} args - The arguments to be passed to the function.
 * @param {number} t - The time interval in milliseconds between function executions.
 * @return {Function} A function that can be called to cancel the interval execution.
 */
const cancellable = function(fn, args, t) {
  const result = [];
  let intervalId = null;
  const initialTime = performance.now();

  /**
   * Executes the function and records its result.
   * @private
   */
  const executeFn = () => {
    const startTime = performance.now();

    result.push({
      time: Math.floor(startTime - initialTime),
      returned: fn(...args)
    });
  };

  // Initial execution
  executeFn();

  // Set up interval to call the function repeatedly
  intervalId = setInterval(executeFn, t);

  /**
   * Cancels the interval execution.
   * @return {void}
   */
  return function cancelFn() {
    clearInterval(intervalId);
  };
};

/**
 * Example usage of the cancellable function.
 */

const result = [];

/**
 * Example 1: Single parameter function
 */
const fn1 = x => x * 2;
const args1 = [4],
  t1 = 35,
  cancelTimeMs1 = 190;

const start1 = performance.now();

const cancel1 = cancellable(fn1, args1, t1);

setTimeout(cancel1, cancelTimeMs1);

setTimeout(() => {
  // Log the result (Note: console.log should be avoided in browser code)
  // console.log(result);
}, cancelTimeMs1 + 15);

/**
 * Example 2: Two parameter function
 */
const fn2 = (x1, x2) => x1 * x2;
const args2 = [2, 5],
  t2 = 30,
  cancelTimeMs2 = 165;

const start2 = performance.now();

const cancel2 = cancellable(fn2, args2, t2);

setTimeout(cancel2, cancelTimeMs2);

setTimeout(() => {
  // Log the result (Note: console.log should be avoided in browser code)
  // console.log(result);
}, cancelTimeMs2 + 15);

/**
 * Example 3: Three parameter function
 */
const fn3 = (x1, x2, x3) => x1 + x2 + x3;
const args3 = [5, 1, 3],
  t3 = 50,
  cancelTimeMs3 = 180;

const start3 = performance.now();

const cancel3 = cancellable(fn3, args3, t3);

setTimeout(cancel3, cancelTimeMs3);

setTimeout(() => {
  // Log the result (Note: console.log should be avoided in browser code)
  // console.log(result);
}, cancelTimeMs3 + 15);
