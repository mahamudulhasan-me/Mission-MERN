// এমন একটা ফাংশন বানাও যেটা একটি অ্যারে নিবে ইনপুট হিসেবে।
//  তারপর সেই অ্যারের সকল উপাদান এর মধ্যে ৫ এর চেয়ে বড় যে সকল সংখ্যা আছে তাদের কাউন্ট নির্ণয় করবে।

// ইনপুটঃ [-1,2,-3,4,5,6,-7,8,-9,10]

// আউটপুটঃ 3
const myArray = [-1, 2, -3, 4, 5, 6, -7, 8, -9, 10];
function filterUp5(arrays) {
  let store = [];
  for (const number of arrays) {
    if (number > 5) {
      store.push(number);
    }
  }
  return store.length;
}
const myResult = filterUp5(myArray);
console.log(myResult);
