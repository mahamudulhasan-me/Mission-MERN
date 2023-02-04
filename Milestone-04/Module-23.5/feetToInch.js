// সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং
//  এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch ।
//  অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়।
function feetToInch(feet) {
  const toConvertInch = feet * 12;
  return toConvertInch;
}
const myFeet = 6;
const myResult = feetToInch(myFeet);
console.log(myResult);
