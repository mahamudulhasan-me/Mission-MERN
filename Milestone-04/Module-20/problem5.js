// একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।
function caseChange(name) {
  //   let result = name.toUpperCase();
  let result = name.toLowerCase();
  return result;
}
const myName = "Mahamudul Hasan";
console.log(caseChange(myName));
