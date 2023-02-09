function makeRed() {
  const section = document.querySelector("section");
  section.style.backgroundColor = "red";
}
const inner = document.getElementById("inner");
document.getElementById("make-blue").onclick = makeBlue;
function makeBlue() {
  inner.style.backgroundColor = "blue";
}
// -----------------------
// const makeOrange = document.getElementById("make-orange");

// makeOrange.addEventListener("click", orange);
// function orange() {
//   document.body.style.backgroundColor = "orange";
// }
// makeOrange.addEventListener("click", function () {
//   document.body.style.backgroundColor = "orange";
// });

document
  .getElementById("make-orange")
  .addEventListener("mouseover", function () {
    document.body.style.backgroundColor = "tomato";
  });
