/**
 * Debounce Function
 * 
 * This function creates a debounced version of the provided function.
 * Debouncing ensures that the function is only executed after a specified delay,
 * and if it's called again within that delay, the timer resets.
 * 
 * @param {Function} fn - The function to be debounced.
 * @param {number} t - The delay time in milliseconds.
 * @returns {Function} A debounced version of the input function.
 */
function debounce(fn, t) {
  let timeoutId = null;
  let latestArgs = null;

  /**
   * @returns {void}
   */
  return function(...args) {
    // Clear the previous timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Update the latest arguments
    latestArgs = args;

    // Set a new timeout
    timeoutId = setTimeout(() => {
      fn(...latestArgs);
    }, t);
  };
}

/**
 * Log Function
 * 
 * This function logs the time elapsed since the start and the provided inputs.
 * Note: Using console.log in browser code should be avoided in production.
 * 
 * @param {...any} inputs - The inputs to be logged.
 */

/**
 * Debounced Log Function
 * 
 * This is a debounced version of the log function with a 50ms delay.
/* global log */

/* global log */
const dlog = debounce(log, 50);

// Example of using the debounced log function
setTimeout(() => dlog(1), 50);
setTimeout(() => dlog(2), 75);

/**
 * Project Overview:
 * 
 * This project demonstrates the implementation and usage of a debounce function.
 * 
 * Key Components:
 * 1. debounce function: Creates a debounced version of any given function.
 * 2. log function: A simple logging function for demonstration purposes.
 * 3. dlog: A debounced version of the log function.
 * 
 * Usage:
 * The debounce function can be used to limit the rate at which a function is called,
 * which is particularly useful for performance optimization in scenarios like
 * handling frequent events (e.g., scroll, resize, input changes).
 * 
 * Note on console.log:
 * The use of console.log in this example is for demonstration purposes.
 * In a production environment, especially for code running in browsers,
 * it's recommended to use proper logging mechanisms or remove debug logs entirely.
 */
