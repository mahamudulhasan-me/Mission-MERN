document.getElementById("item2").addEventListener("click", function (event) {
  console.log("item 2 clicked");
  event.stopPropagation(event);
});
document.getElementById("tran-list").addEventListener("click", function () {
  console.log("list container clicked");
});
document.querySelector("section").addEventListener("click", function () {
  console.log("clicked on section");
});
