const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("timer is done");
  fetchData().then((text) => {
    console.log(text);
  });
}, 2000);

console.log("hello");
console.log("hi");
