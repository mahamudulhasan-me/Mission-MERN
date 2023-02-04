// এমন একটা ফাংশন বানাবে যেটিতে তুমি ইনপুট হিসেবে পানির volume ইন্সারট করবে মিলিলিটারে।
//  এই মিলিলিটারকে লিটারে কনভার্ট করে  ফাংশন তোমাকে রিটার্ন করবে।
function miliLToLeter(miliLeter) {
  const toConvertLeter = miliLeter / 1000;
  return toConvertLeter;
}
const myMiliLeter = 1500;
const myResult = miliLToLeter(myMiliLeter);
console.log(myResult);
