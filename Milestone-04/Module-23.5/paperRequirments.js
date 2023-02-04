// আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার

// হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও।
// সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে।

// এইবার ভালো করে খেয়াল করো।

// প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা

// সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা

// তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা

// এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর
// কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে।

function paperRequirements(firstBookQnty, secondBookQnty, thirdBookQnty) {
  const paperReqrFor1stBook = 100 * firstBookQnty;
  const paperReqrFor2ndBook = 200 * secondBookQnty;
  const paperReqrFor3rdBook = 300 * thirdBookQnty;
  const totalRequirementsPaper =
    paperReqrFor1stBook + paperReqrFor2ndBook + paperReqrFor3rdBook;
  return totalRequirementsPaper;
}
const firstBookQnty = 10;
const secondBookQnty = 15;
const thirdBookQnty = 8;
const myResult = paperRequirements(
  firstBookQnty,
  secondBookQnty,
  thirdBookQnty
);
console.log(myResult);
