// তোমার দুজন বন্ধুর নাম একটি ফাংশনের প্যারামিটার হিসেবে পাস করো।
// তারপর এই দুইটি নামের মধ্যে যে নামটি বড়ো সেটি reverse অর্ডারে রিটার্ন করো।
function largeName(name1, name2) {
  if (name1.length > name2.length) {
    const result = name1.split("").reverse().join("");
    return result;
  } else {
    const result = name2.split("").reverse().join("");
    return result;
  }
}
const myResult = largeName("Mahmudul", "Hasan Manik");
console.log(myResult);
