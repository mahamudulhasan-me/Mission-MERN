function increment() {
  let counter = 0;
  return function () {
    counter++;
    console.log(counter);
  };
}

const incrementt = increment();
incrementt();
incrementt();
