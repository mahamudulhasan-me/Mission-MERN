let counter = 0;
document.querySelector("button").addEventListener("click", () => {
  document.querySelector("p").innerHTML = ++counter;
  localStorage.setItem("counter", counter);
});
function getCounterToLocalStorage() {
  const getCounter = localStorage.getItem("counter");
  counter = getCounter;
  document.querySelector("p").innerHTML = getCounter;
}
getCounterToLocalStorage();
