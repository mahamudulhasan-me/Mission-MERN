// একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে।
//  সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড়
//  সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।
const MyFriends = [
  "Shakib-al Hasan",
  "Mashrafi Morteza",
  "Tamim Iqbal",
  "Mushfiqur Rahman",
  "Mahmudullah Riyad",
];
function bestFriend(friends) {
  let largeName = friends[0];
  for (const friend of friends) {
    if (friend.length > largeName.length) {
      largeName = friend;
    }
  }
  return largeName;
}
const myResult = bestFriend(MyFriends);
console.log(myResult);
