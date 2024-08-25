/**
 * ArrayWrapper Class
 * 
 * This class provides a wrapper for arrays with additional functionality.
 */
class ArrayWrapper {
  /**
   * Create an ArrayWrapper instance.
   * @param {number[]} arr - The array to be wrapped.
   */
  constructor(arr) {
    this.arr = arr;
  }

  /**
   * Static method to add two ArrayWrapper instances.
   * @param {ArrayWrapper} arr1 - The first ArrayWrapper instance.
   * @param {ArrayWrapper} arr2 - The second ArrayWrapper instance.
   * @returns {number} The sum of all elements in both arrays.
   */
  static addArrays(arr1, arr2) {
    const combinedArray = arr1.concat(arr2);
    return combinedArray.reduce((sum, num) => sum + num, 0);
  }

  /**
   * Overload the + operator.
   * @returns {number} The sum of all elements in the array.
   */
  valueOf() {
    return this.arr.reduce((sum, num) => sum + num, 0);
  }

  /**
   * Convert the ArrayWrapper instance to a string.
   * @returns {string} A string representation of the array.
   */
  toString() {
    return `[${this.arr.join(",")}]`;
  }
}

// Example usage
const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
console.log(obj1 + obj2); // 10

const obj3 = new ArrayWrapper([23, 98, 42, 70]);
console.log(String(obj3)); // "[23,98,42,70]"

const obj4 = new ArrayWrapper([]);
const obj5 = new ArrayWrapper([]);
console.log(obj4 + obj5); // 0
