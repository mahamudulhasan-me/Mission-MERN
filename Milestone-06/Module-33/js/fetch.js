// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
function loadData() {
  const ulr = "https://jsonplaceholder.typicode.com/todos/1";
  fetch(ulr)
    .then((response) => response.json())
    .then((json) => console.log(json));
}
