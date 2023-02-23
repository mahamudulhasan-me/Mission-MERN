const errorPage = document.getElementById("error");
const errorContainer = document.getElementById("error-container");

function getComments() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => {
      if (response.status !== 200) {
        errorContainer.style.display = "flex";
        errorPage.innerText = `${response.status} Not Found!`;
      } else {
        return response.json();
      }
    })
    .then((comments) => showComments(comments));
}

function showComments(comments) {
  const main = document.querySelector("main");
  for (const comment of comments) {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="ring ring-violet-500 p-5 space-y-3 bg-violet-100 rounded-xl">
        <div
          class="flex border-b border-violet-300 font-bold justify-between text-xl"
        >
          <p>User Id: ${comment.postId}</p>
          <p>Post Id: ${comment.id}</p>
        </div>
        <div
          class="flex border-b border-violet-300 font-semibold justify-between"
        >
          <h3>User Name: ${comment.name}</h3>
          <h3>User Email: ${comment.email}</h3>
        </div>
        <div>
          <p class="font-bold underline decoration-violet-300">Comments:</p>
          <p class="bg-gray-200 p-3 rounded-md border border-violet-600">
          ${comment.body}
          </p>
        </div>
      </div>`;
    main.appendChild(div);
  }
}
getComments();
