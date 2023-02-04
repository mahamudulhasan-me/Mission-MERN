// একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে।
// এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে।

function centimeterToMeter(cm) {
  const toConvertMeter = cm / 100;
  return toConvertMeter;
}
const myCentimeter = 500;
const myResult = centimeterToMeter(myCentimeter);
console.log(myResult);
