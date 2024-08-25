/**
 * EventEmitter class for managing event subscriptions and emissions.
 */
class EventEmitter {
  /**
   * Initializes a new instance of the EventEmitter class.
   */
  constructor() {
    /**
     * Map to store event listeners.
     * @type {Map<string, Function[]>}
     */
    this.events = new Map();
  }

  /**
   * Subscribes a callback function to a specific event.
   * @param {string} eventName - The name of the event to subscribe to.
   * @param {Function} callback - The function to be called when the event is emitted.
   * @returns {Object} An object with an unsubscribe method to remove the subscription.
   */
  subscribe(eventName, callback) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }
    const listeners = this.events.get(eventName);
    listeners.push(callback);

    return {
      /**
       * Unsubscribes the callback from the event.
       */
      unsubscribe: () => {
        const index = listeners.indexOf(callback);
        if (index > -1) {
          listeners.splice(index, 1);
        }
      }
    };
  }

  /**
   * Emits an event, calling all subscribed callbacks with the provided arguments.
   * @param {string} eventName - The name of the event to emit.
   * @param {Array} [args=[]] - An array of arguments to pass to the event callbacks.
   * @returns {Array} An array containing the results of all callback executions.
   */
  emit(eventName, args = []) {
    if (!this.events.has(eventName)) {
      return [];
    }
    const listeners = this.events.get(eventName);
    const results = listeners.map(listener => listener(...args));
    return results;
  }
}

// Example Usage
const emitter = new EventEmitter();
console.log(emitter.emit("firstEvent")); // []

const sub1 = emitter.subscribe("firstEvent", (...args) => args.join(","));
console.log(emitter.emit("firstEvent", [1, 2, 3])); // ["1,2,3"]

const sub2 = emitter.subscribe("firstEvent", (...args) => args.map(x => x + 1));
console.log(emitter.emit("firstEvent", [4, 5, 6])); // ["4,5,6", [5, 6, 7]]

sub1.unsubscribe();
console.log(emitter.emit("firstEvent", [7, 8, 9])); // [[8, 9, 10]]
