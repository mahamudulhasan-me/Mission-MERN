async function loadUser() {
  const response = await fetch("https://api.github.com/users/anisul-islam");
  const data = await response.json();
  console.log(data);

  displayUser(data);
}
loadUser();

const displayUser = (user) => {
  const date = new Date(user.created_at).toDateString();

  document.querySelector("body").innerHTML = `
      <div
        class="bg-slate-900 w-1/2 mx-auto text-white flex gap-10 pt-10 my-8 rounded-xl"
      >
        <img src="${
          user.avatar_url
        }" alt="" class="w-32 h-32 rounded-full ring-violet-400" />
        <div class="space-y-5">
          <div class="flex justify-between px-2">
          <div>
          <p>${user.name}</p>
            <p>${user.login}</p>
            <p>${user.bio ? user.bio : "This profile has no bio"}</p>
          </div>
          <p>${date}</p>
          </div>
          <div class="bg-slate-600 p-2 flex justify-around">
            <div>
              <p>Repos</p>
              <p>${user.public_repos}</p>
            </div>
            <div>
              <p>Followers</p>
              <p>${user.followers}</p>
            </div>
            <div>
              <p>Following</p>
              <p>${user.following}</p>
            </div>
          </div>
          <div class="flex">
            <img src="" alt="" class="w-24 h-24 rounded-full" />
            <img src="" alt="" class="w-24 h-24 rounded-full" />
          </div>
          <div class="grid grid-cols-2 grid-rows-2">
          <p>${user.location}</p>
          <p>${
            user.twitter_username
              ? user.twitter_username
              : "twitter_username not found"
          }</p>
          <p>${user.blog}</p>
          <p>${user.node_id}</p>
          </div>
        </div>
      </div>
      `;
};
