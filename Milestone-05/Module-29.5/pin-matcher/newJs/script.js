function randomNumGenerator() {
  const pin = Math.floor(Math.random() * 10000);
  return pin;
}
console.log(randomNumGenerator());
document.getElementById("pin_generator").addEventListener("click", () => {
  randomNumGenerator();
  console.log(randomNumGenerator());
});
