const liCollection = document.getElementsByTagName("li");
//   console.log(liCollection);
for (const li of liCollection) {
  // console.log(li.innerText);
}
const heading = document.getElementsByTagName("h2");
for (const h2 of heading) {
  // console.log(h2.innerText);
}
const placeTitle = document.getElementById("place-title");
// console.log(placeTitle.innerText);
const placeItems = document.getElementsByClassName("place-item");
// console.log(placeItems);
for (const place of placeItems) {
  // console.log(place.innerText);
}

const otherPlaces = document.getElementsByClassName("otherPlace");
for (const place of otherPlaces) {
  //   console.log(place.innerHTML);
}
const favPlaces = document.querySelector(".fav-place");
console.log(favPlaces);
