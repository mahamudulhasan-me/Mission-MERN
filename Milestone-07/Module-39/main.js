let myInterval;
let counter = 0;
document.getElementById("start").addEventListener("click", () => {
  myInterval = setInterval(() => {
    document.getElementById("value").innerHTML = counter++;
  }, 1000);
});
document.getElementById("end").addEventListener("click", () => {
  clearInterval(myInterval);
});
document.getElementById("reset").addEventListener("click", () => {
  counter = 0;
  document.getElementById("value").innerText = counter;
});
