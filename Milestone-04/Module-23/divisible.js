for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i, "-", "foobar");
  } else if (i % 3 == 0) {
    console.log(i, "-", "foo");
  } else if (i % 5 === 0) {
    console.log(i, "-", "bar");
  } else {
    console.log(i);
  }
}
