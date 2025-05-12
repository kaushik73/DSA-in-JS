function outerFunction() {
  let count = 0;
  return function innerFunction() {
    count++;
    console.log(count);
  };
}

const counter = outerFunction();
counter(); // Outputs: 1
counter(); // Outputs: 2

// 2nd Example :
const outer = () => {
  let count = 0;
  let isPaused = false;

  return {
    increment: () => {
      if (!isPaused) {
        count++;
        console.log(`Count: ${count}`);
      }
    },
    pause: () => {
      isPaused = true;
      console.log("Counter paused");
    },
    resume: () => {
      isPaused = false;
      console.log("Counter resumed");
    },
    stop: () => {
      count = 0;
      isPaused = true;
      console.log("Counter stopped and reset");
    },
    getCount: () => count,
  };
};

const myCounter = outer();

// Usage examples:
myCounter.increment(); // Count: 1
myCounter.increment(); // Count: 2
myCounter.pause(); // Counter paused
myCounter.increment(); // (No output, counter is paused)
myCounter.resume(); // Counter resumed
myCounter.increment(); // Count: 3
myCounter.stop(); // Counter stopped and reset
myCounter.increment(); // (No output, counter is paused)
