function wait(seconds) {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      //   while (true) {}
      resolve(true);
    }, seconds * 1000);
  });
}

module.exports = wait;
