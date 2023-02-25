async function loadUser() {
  const response = await fetch("https://api.github.com/users");
  const data = await response.json();
  console.log(data);
  displayUser(data);
}

const displayUser = (users) => {
  const body = document.querySelector("body");
  users.forEach((user) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <div
      class="bg-slate-900 w-1/2 mx-auto text-white flex gap-10 pt-10 my-8 rounded-xl"
    >
      <img src="${user.avatar_url}" alt="" class="w-32 h-32 rounded-full ring-violet-400" />
      <div class="space-y-5">
        <p>Name: ${user.login}</p>
        <div class="flex">
          <img src="" alt="" class="w-24 h-24 rounded-full" />
          <img src="" alt="" class="w-24 h-24 rounded-full" />
        </div>
        <p>Repo Link: <a href="${user.repos_url} class="text-violet-400 underline">${user.repos_url}</a></p>
      </div>
    </div>
    `;
    body.appendChild(div);
  });
};
loadUser();
async function follower() {
  const response = await fetch(
    `https://api.github.com/users/mojombo/followers`
  );
  const data = await response.json();
}
