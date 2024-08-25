/**
 * Calculator class for performing arithmetic operations with method chaining.
 * @class
 */
class Calculator {
  /**
   * Creates a new Calculator instance.
   * @constructor
   * @param {number} initial - The initial value to start calculations with.
   */
  constructor(initial) {
    this.result = initial;
  }

  /**
   * Adds a value to the current result.
   * @param {number} value - The value to add.
   * @return {Calculator} The Calculator instance for method chaining.
   */
  add(value) {
    this.result += value;
    return this;
  }

  /**
   * Subtracts a value from the current result.
   * @param {number} value - The value to subtract.
   * @return {Calculator} The Calculator instance for method chaining.
   */
  subtract(value) {
    this.result -= value;
    return this;
  }

  /**
   * Multiplies the current result by a value.
   * @param {number} value - The value to multiply by.
   * @return {Calculator} The Calculator instance for method chaining.
   */
  multiply(value) {
    this.result *= value;
    return this;
  }

  /**
   * Divides the current result by a value.
   * @param {number} value - The value to divide by.
   * @throws {Error} If the value is zero.
   * @return {Calculator} The Calculator instance for method chaining.
   */
  divide(value) {
    if (value === 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.result /= value;
    return this;
  }

  /**
   * Raises the current result to the power of a value.
   * @param {number} value - The exponent to raise the current result to.
   * @return {Calculator} The Calculator instance for method chaining.
   */
  power(value) {
    this.result = Math.pow(this.result, value);
    return this;
  }

  /**
   * Returns the current result of the calculations.
   * @return {number} The current result.
   */
  getResult() {
    return this.result;
  }
}

// Example usage:
const calc = new Calculator(10);
const result = calc
  .add(5)
  .subtract(3)
  .multiply(2)
  .divide(4)
  .power(2)
  .getResult();
// The result is 36
