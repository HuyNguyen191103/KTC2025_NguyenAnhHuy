// Callback ==> hard to read, maintain and occur logic errors

console.log("start");
setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
      setTimeout(() => {
        console.log("Stop");
      }, 1000);
    }, 3000);
  }, 2000);
}, 1000);

// Should prevent callback hell
// Solution: promise, async/await
function delay(ms, mess) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(mess);
      resolve();
    }, ms);
  });
}

console.log("start");
delay(1000, "Step 1")
  .then(() => delay(1000, "Step 2"))
  .then(() => delay(1000, "Step 3"))
  .then(() => console.log("Stop"));
