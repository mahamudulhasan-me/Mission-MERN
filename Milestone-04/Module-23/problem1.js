// ১. একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে।
// এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য।
// এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা।
//  কোন একটা ত্রিভুজের তিনটা বাহুর দৈর্য্য দেয়া থাকলে সেটা থেকে কিভাবে আয়তন বের করতে হয়
//  সেই ফর্মুলা গুগল থেকে খুঁজে বের করো।
function triangleArea(side1, side2, side3) {
  const result = side1 + side2 + side3;
  return result;
}
let side1 = 10;
let side2 = 12;
let side3 = 20;
const myTriangle = triangleArea(side1, side2, side3);
console.log(myTriangle);
