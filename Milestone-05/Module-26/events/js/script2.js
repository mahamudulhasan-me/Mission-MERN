document.getElementById("commentSubmit").addEventListener("click", function () {
  const comment = document.getElementById("comment-body");
  const p = document.createElement("p");
  p.innerText = comment.value;
  const commentContainer = document.getElementById("comment-container");
  commentContainer.appendChild(p);
  comment.value = "";
});
