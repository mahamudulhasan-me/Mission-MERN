function getBideshini() {
  fetch("https://randomuser.me/api/?gender=female")
    .then((response) => response.json())
    .then((data) => showUser(data));
}
const showUser = (user) => {
  document.getElementById("gender").innerText = user.results[0].gender;
  document.querySelector("figure").innerHTML = `<img
  src=${user.results[0].picture.large}

  alt=""
/>`;
  document.getElementById("nameTitle").innerText = user.results[0].name.title;
  document.getElementById("fName").innerText = user.results[0].name.first;
  document.getElementById("lName").innerText = user.results[0].name.last;

  console.log(user.results);
};
getBideshini();
