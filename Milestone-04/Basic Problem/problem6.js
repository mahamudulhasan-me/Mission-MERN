// একটা ফাংশন বানাবে যেটি একটি অ্যারে অফ অবজেক্ট রিসিভ করে প্যারামিটার হিসেবে।
// প্রতিটি অবজেক্টে একটি মানুষের নাম  এবং বয়স থাকবে। এখন তোমার কাজ হচ্ছে
// এই অ্যারে থেকে সবচেয়ে ছোট যে person কে খুঁজে বের করা।
//  	অব্জজেক্টটি/Input দেখতে এমনঃ

const myArray = [
  { name: "sakib", age: 10 },
  { name: "samiul", age: 20 },
  { name: "sahid", age: 5 },
  { name: "samin", age: 80 },
];
function smallestPerson(persons) {
  let youngBoy = persons[0];
  for (const person of persons) {
    if (person.age < youngBoy.age) {
      youngBoy = person;
    }
  }
  return youngBoy.name;
}
console.log(smallestPerson(myArray));
myArray.sort(function (a, b) {
  let result = a.age - b.age;
  return result;
});
console.log(myArray);
