const loadCategory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await response.json();
  displayCategory(data.data);
};

const displayCategory = (categories) => {
  console.log(categories.news_category);
  categories.news_category.forEach((category) => {
    document.getElementById("category_container").innerHTML += `
    <button onclick="displayNews('${category.category_id}')" >${category.category_name}</button>
    `;
  });
  document.querySelectorAll("#category_container button").forEach((button) => {
    button.addEventListener("click", (e) => {
      if (e.target.style.color === "text-slate-800") {
        e.target.classList.add("text-green-500");
      } else {
        e.target.classList.add("bg-green-500");
      }
    });
  });
};
loadCategory();

const displayNews = (categoryId) => {
  console.log(categoryId);
};
