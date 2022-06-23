// let cnt = 1;

// setInterval(() => {
//   console.log(++cnt);
// }, 1000);

/* 


*/

const wait = require("./helper.js");

async function init() {
  console.log("[+] Starting to run.....");

  console.log("[+] waiting 2 seconds to refill...");
  await wait(2);

  console.log("[+] Energy level is up and running");

  console.log("[+] running faster than anyone for 3 seconds...");
  await wait(3);

  console.log("[+] Tired now... Taking a nap");
  await wait(2);

  console.log("Reached end of the line...");
}

init();
