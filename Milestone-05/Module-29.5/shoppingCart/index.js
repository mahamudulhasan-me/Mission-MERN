document.getElementById("btn_mode").addEventListener("click", (e) => {
  const currentMode = document.querySelector("html");

  if (currentMode.getAttribute("data-theme") === "night") {
    currentMode.setAttribute("data-theme", "light");
  } else {
    currentMode.setAttribute("data-theme", "night");
  }
});

function getInnerText(id) {
  const innerText = document.getElementById(id);
  const innerTextToNum = parseFloat(innerText.innerText);
  return innerTextToNum;
}

function addToCart(btn_name) {
  document.getElementById(btn_name);
}
let increment = 1;
const allBtn = document.querySelectorAll(".btn");
for (let btn of allBtn) {
  btn.addEventListener("click", (e) => {
    const name = e.target.parentNode.parentNode.childNodes[1].innerText;
    const price =
      e.target.parentNode.parentNode.childNodes[5].childNodes[1].innerText;
    const quantity =
      e.target.parentNode.parentNode.childNodes[7].childNodes[1].innerText;
    const total = price * quantity;
    const tr = document.createElement("tr");
    tr.innerHTML = `
              <td>${increment}</td>
              <td>${name}</td>
              <td>$${price}</td>
              <td>${quantity}</td>
              <td>$${total}</td>`;
    const tableBody = document.querySelector("tbody");
    tableBody.appendChild(tr);
    increment++;
    e.target.setAttribute("disabled", true);
  });
}
