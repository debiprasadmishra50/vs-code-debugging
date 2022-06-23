export default function wait(seconds) {
  return new Promise<boolean>((resolve, _) => {
    setTimeout(() => {
      // while (true) {}
      resolve(true);
    }, seconds * 1000);
  });
}
