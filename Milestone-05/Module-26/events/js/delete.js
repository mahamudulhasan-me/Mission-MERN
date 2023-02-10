document.getElementById("btn-submit").addEventListener("click", function () {
  const fileData = document.getElementById("file");
  fileData.style.display = "none";
  document.getElementById("text-value").value = "";
});
document
  .getElementById("text-value")
  .addEventListener("keyup", function (event) {
    const textValue = event.target.value;
    const deleteBtn = document.getElementById("btn-submit");
    if (textValue == "delete") {
      deleteBtn.removeAttribute("disabled");
    } else {
      deleteBtn.setAttribute("disabled", true);
    }
  });

// document.getElementById("btn-submit").addEventListener("click", function () {
//   const fileData = document.getElementById("file");
//   fileData.style.display = "none";
//   document.getElementById("text-value").value = "";
// });
// document
//   .getElementById("text-value")
//   .addEventListener("keyup", function (event) {
//     const deleteValue = event.target.value;
//     const deleteBtn = document.getElementById("btn-submit");
//     if (deleteValue == "delete") {
//       deleteBtn.removeAttribute("disabled");
//     } else {
//       deleteBtn.setAttribute("disabled", true);
//     }
//   });
