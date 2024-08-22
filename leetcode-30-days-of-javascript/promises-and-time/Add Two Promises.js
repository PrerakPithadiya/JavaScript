/**
 * Adds the resolved values of two promises.
 * 
 * This function takes two promises as input, waits for both to resolve,
 * and then returns a new promise that resolves to the sum of their values.
 * 
 * @param {Promise} promise1 - The first promise to be resolved
 * @param {Promise} promise2 - The second promise to be resolved
 * @return {Promise<number>} A promise that resolves to the sum of the two input promises' resolved values
 * 
 * @example
 * // Basic usage
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // Outputs: 4
 * 
 * @example
 * // Using with different values
 * addTwoPromises(Promise.resolve(5), Promise.resolve(7))
 *   .then(console.log); // Outputs: 12
 */
const addTwoPromises = async function(promise1, promise2) {
  const result1 = await promise1;
  const result2 = await promise2;
  return result1 + result2;
};

// Example usage
addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4

addTwoPromises(Promise.resolve(5), Promise.resolve(7)).then(console.log); // 12
