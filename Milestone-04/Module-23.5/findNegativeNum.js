// একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা।
// এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে
//  কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে।
//  এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে।

const numbers = [10, 20, 25, 26, 43, 12, -56, 60, -60, 50];
function filterPositive(numbers) {
  let storeNum = [];
  for (const number of numbers) {
    if (number < 0) {
      break;
    } else {
      storeNum.push(number);
    }
  }
  return storeNum;
}
const myResult = filterPositive(numbers);
console.log(myResult);
