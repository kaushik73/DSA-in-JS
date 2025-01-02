function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 2000);
  });
}

// Using Promises
fetchData().then((result) => {
  console.log(result); // Outputs: Data fetched!
});

// Using Async/Await
async function displayData() {
  const data = await fetchData();
  console.log(data); // Outputs: Data fetched!
}

displayData();
