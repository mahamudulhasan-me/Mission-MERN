// যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা।
const allH2 = document.getElementsByTagName("h2");
for (const h2 of allH2) {
  h2.style.color = "red ";
}
// ওই ওয়েবসাইট এ backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা।
document.getElementById("backpack").style.backgroundColor = "tomato";
// card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা
const allCard = document.getElementsByClassName("card");
for (const card of allCard) {
  card.style.borderRadius = "30px";
}

// কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো

// function handleClick() {
//   console.log("add on cart");
// }
// এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে
//  card টা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো।

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function () {
//     const cards = document.querySelectorAll(".card");
//     for (let j = 0; j < cards.length; j++) {
//       cards[i].style.display = "none";
//     }
//   });
// }
function gayeb() {
  document.querySelector(".card").style.display = "none";
}
const email = document.getElementById("email-value");
const submitBtn = document.getElementById("btn-submit");
email.addEventListener("keyup", function () {
  if (email.value.includes("@")) {
    submitBtn.removeAttribute("disabled");
  }
});
const img = document.querySelector("#shoes img");
document.querySelector(".card").addEventListener("mouseenter", function () {
  img.src = "images/shoes/shoe-3.png";
});
document.getElementById("subscribe").addEventListener("dblclick", function () {
  const main = document.getElementById("subscribe");
  main.style.backgroundColor = "orange";
});
