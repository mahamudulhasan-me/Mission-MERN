// Problem:1   radianToDegree
// ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)।
// তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে।
// রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।
function radianToDegree(radian) {
  // Formula	1rad × 180/π = 57.296°
  const toConvertDegree = parseFloat((radian * (180 / Math.PI)).toFixed(2));
  return toConvertDegree;
}
console.log(radianToDegree(10));
console.log(radianToDegree(25));
console.log(radianToDegree(199));
