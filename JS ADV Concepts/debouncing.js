/*
Debouncing: Funx is invoked after a certain period of inactivity.
Purpose:
Delays the execution of a function until a certain amount of time has passed since the last event trigger.
How it works:
When an event occurs, a timer is set. If another event occurs before the timer expires, the timer is reset. The function is only executed when the timer finally expires.
Use cases:
Search box suggestions: Only send a request to the server after the user has stopped typing for a brief moment.
Window resizing: Only recalculate layout after the user has finished resizing the window.
*/

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}

function debouncePreserveThis(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      res = fn.apply(this, args);
      3;
    }, delay);
  };
}

function debouncePromise(func, delay) {
  let timer;
  return (...args) =>
    new Promise((resolve) => {
      clearTimeout(timer);
      timer = setTimeout(() => resolve(func(...args)), delay);
    });
}

const handleResize = debounce(() => {
  console.log("Window resized!");
}, 500);

window.addEventListener("resize", handleResize);

const fetchData = debouncePromise((query) => {
  console.log("Fetching data for:", query);
}, 500);

fetchData("JavaScript");

import debounce from "lodash/debounce";

const handleScroll = debounce(() => {
  console.log("Scroll event triggered!");
}, 300);
