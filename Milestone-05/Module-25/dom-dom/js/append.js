let mainContainer = document.getElementById("mainContainer");

// add title
let section = document.createElement("section");
mainContainer.appendChild(section);
let h1 = document.createElement("h1");
h1.innerText = "My Favorite Food Items";
section.appendChild(h1);

// add ul
let ul = document.createElement("ul");
section.appendChild(ul);
// add li
let li1 = document.createElement("li");
li1.innerText = "Biriyani";
ul.appendChild(li1);
// add li
let li2 = document.createElement("li");
li2.innerText = "Gorur Gosto";
ul.appendChild(li2);
// add li
let li3 = document.createElement("li");
li3.innerText = "gorom vat";
ul.appendChild(li3);
