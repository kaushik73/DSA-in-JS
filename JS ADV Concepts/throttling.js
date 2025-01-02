/*
Throttling:
Purpose: Limits the rate at which a function is executed.
How it works: The function is executed at regular intervals, regardless of how frequently the event is triggered.
Use cases:
Infinite scrolling: Load more content only at certain scroll intervals.
Mouse movement tracking: Track mouse position at a fixed rate.
*/

function throttle(func, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();
    console.log(now, lastCall, now - lastCall, delay);
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
}

function throttle1(func, delay) {
  let isThrottled = false;

  return function (...args) {
    if (!isThrottled) {
      func(...args);
      isThrottled = true;

      setTimeout(() => {
        isThrottled = false;
      }, delay);
    }
  };
}

// Example usage
const log = throttle(() => console.log("Function executed"), 2000);
//log();

const log1 = throttle1(() => console.log("Function executed1"), 2000);
log1();

import _ from "lodash";

const log2 = _.throttle(() => console.log("Function executed2"), 2000);
//log2();
