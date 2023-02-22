function loadPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => displayPost(posts));
}
function displayPost(posts) {
  const main = document.querySelector("main");
  for (const post of posts) {
    let article = document.createElement("article");
    article.innerHTML = `<h5>User Id:${post.userId}</h5>
    <h5>Id:${post.id}</h5> 
    <h2>Title: ${post.title}</h2>
    <p><strong>Main Body </strong><br>${post.body}</p`;
    main.appendChild(article);
    console.log(post);
  }
}
loadPost();
