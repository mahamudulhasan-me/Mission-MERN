function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + 1);
}
console.log(randomNumber(1, 6));
