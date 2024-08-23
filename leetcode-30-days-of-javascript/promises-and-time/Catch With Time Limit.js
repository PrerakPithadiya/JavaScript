/**
 * TimeLimitedCache Class
 * 
 * This class implements a time-limited cache that stores key-value pairs with expiration times.
 * It provides methods to set, get, and count entries in the cache.
 */
class TimeLimitedCache {
  /**
   * Constructor for TimeLimitedCache
   * Initializes an empty Map to store cache entries
   */
  constructor() {
    this.cache = new Map(); // To store key-value pairs and expiration times
  }

  /**
   * Sets a key-value pair in the cache with a specified duration
   * 
   * @param {number} key - The key to set in the cache
   * @param {number} value - The value to associate with the key
   * @param {number} duration - Time until expiration in milliseconds
   * @return {boolean} Returns true if an unexpired key already existed, false otherwise
   */
  set(key, value, duration) {
    const now = Date.now();
    const expiration = now + duration;

    // Check if key already exists and is not expired
    const existed = this.cache.has(key) && this.cache.get(key).expiration > now;

    // Update or add the key-value pair with expiration time
    this.cache.set(key, { value, expiration });

    return existed; // Return true if key was already present
  }

  /**
   * Retrieves the value associated with a key from the cache
   * 
   * @param {number} key - The key to look up in the cache
   * @return {number} Returns the value associated with the key if it exists and is not expired, -1 otherwise
   */
  get(key) {
    const now = Date.now();

    // Check if the key exists and is not expired
    if (this.cache.has(key)) {
      const entry = this.cache.get(key);
      if (entry.expiration > now) {
        return entry.value; // Return the value if not expired
      } else {
        this.cache.delete(key); // Remove expired key
      }
    }

    return -1; // Return -1 if key is expired or does not exist
  }

  /**
   * Counts the number of non-expired entries in the cache
   * 
   * @return {number} Returns the count of non-expired keys in the cache
   */
  count() {
    const now = Date.now();
    let count = 0;

    // Iterate over the cache and count non-expired keys
    for (const [key, entry] of this.cache) {
      if (entry.expiration > now) {
        count++;
      } else {
        this.cache.delete(key); // Remove expired keys
      }
    }

    return count;
  }
}

// Example usage
const timeLimitedCache = new TimeLimitedCache();
// The following console.log is necessary to log the result of the cache setting operation for user verification
console.log(timeLimitedCache.set(1, 42, 1000)); // false // skipcq: JS-0002
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.count()); // 1
