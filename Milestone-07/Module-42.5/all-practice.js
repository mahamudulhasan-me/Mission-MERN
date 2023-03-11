// 1. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথ ২০০যোগ করো।
// যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও
// const num = prompt("Enter a positive number: ");
// if (num > 0) {
//   alert(`Your Number Summation with 200 is: ${parseInt(num) + 200}`);
// } else {
//   alert("Please enter a positive number");
// }
// 2. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও।
//  যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও

// const isConfirm = confirm("Do you see your website name?");
if (isConfirm === true) {
  console.log(location.href);
} else {
  alert("Please click yes to continue");
}
