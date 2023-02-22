function loadUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => displayUsers(users));
}
function displayUsers(users) {
  const ul = document.querySelector("ul");
  for (const user of users) {
    const li = document.createElement("li");
    li.innerText = user.email;
    ul.appendChild(li);
  }
}
