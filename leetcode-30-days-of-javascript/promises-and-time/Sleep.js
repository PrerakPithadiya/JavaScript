/**
 * Asynchronous function that creates a delay for the specified number of milliseconds.
 * 
 * @param {number} millis - The number of milliseconds to sleep.
 * @return {Promise} A promise that resolves after the specified delay.
 */
async function sleep(millis) {
  return new Promise(resolve => setTimeout(resolve, millis));
}

/**
 * Example usage:
 * 
 * This example demonstrates how to use the sleep function to create delays
 * and measure the elapsed time.
 */

// Get the current timestamp
let t = Date.now();

// Example 1: Sleep for 100 milliseconds
sleep(100).then(() => console.log(Date.now() - t)); // approximately 100

// Example 2: Sleep for 200 milliseconds
sleep(200).then(() => console.log(Date.now() - t)); // approximately 300
