// ১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে।
//  তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।
const pi = 3.1416;
let num = 42;
const myObj = {
  fName: "John",
  lName: "Doe",
  age: 30,
};
// ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও।
//  একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার
//   টেমপ্লেট স্ট্রিং এর মধ্যে বসাও।
const sum = `The summation of pi and num is: ${pi + num}`;
const showProperties = `Full Name: ${myObj.fName} ${myObj.lName}`;
// console.log(sum);
// console.log(showProperties);
// --------------------------------------------------------------------------
// ৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে
// সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে।

const dividedBy5 = (n) => n / 5;
// console.log(dividedBy5(10));
// // -----------------------------------------
// ৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে।
// প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে।
//  ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো
const sumAndMultiply = (num1, num2) => (num1 + 2) * (num2 + 2);
// console.log(sumAndMultiply(2, 2));
// // --------------------------------------------------------------
// ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা
//  প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে।
const multiplyThreeNumbers = (num1, num2, num3) => num1 * num2 * num3;
// console.log(multiplyThreeNumbers(2, 2, 2));
// --------------------------------------------------------
// ৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের।
// সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে।
//  ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো।
const sumAndMultiply2 = (num1, num2) => {
  const num2_1 = num1 + 2;
  const num2_2 = num2 + 2;
  return num2_1 * num2_2;
};
// console.log(sumAndMultiply2(2, 2));
// -------------------------------------------------
// ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে।
//  প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiplyByFive = numArray.map((num) => num * 5);
// console.log(multiplyByFive);
// ---------------------------------------------------------
// ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা
// বের করে নিয়ে আসার জন্য filter ইউজ করো
const oddNumber = numArray.filter((num) => num % 2 === 1);
// console.log(oddNumber);
// ------------------------------------------------------------
// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই
// অবজেক্টকে find দিয়ে বের করো
const priceList = [500, 800, 1000, 200, 80000, 5000, 9000, 7000];
const priceGreaterThan5000 = priceList.find((price, index, array) => {
  const result = price > 5000;
  return result;
});
console.log(priceGreaterThan5000);
// -----------------------------------------------------------
// ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার
//  করার জন্য destructuring ইউজ করো।

const myInfo = {
  name: "Mahamudul Hasan",
  age: 20,
  address: "Mumbai, India",
};
const { name, age, address } = myInfo;
// console.log(name);
// console.log(address);
// ------------------------------------------------
// ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর
//  উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে।
const simpleArray = [1, 2, 3, 4, 5];
const [first, second, third, ...all] = [...simpleArray];
// console.log(third);
// console.log(all);
// ---------------------------------------
// ১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা
//  প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭।
const sumThreeNumbers = (num1, num2, num3 = 5) => num1 + num2 + num3;
// console.log(sumThreeNumbers(1, 2));
// ------------------------------------------------
// ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে।
//     আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো।
//      এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )
let instructor = {
  name: "Jhankar Mahbub",
  entrepreneur: true,
  additionalData: {
    writer: true,
    favoriteHobbies: ["travelling", "Coding"],
    books: ["programming er bolod to bos", "programming er coddogosti"],
    moreDetails: {
      favoriteBasketballTeam: "XYZ",
      isYoungest: true,
      hometown: {
        city: "ABC",
        state: "VW",
      },
      countriesLivedIn: ["Bangladesh", "New York"],
    },
  },
};

// ১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো।
const showABC = instructor.additionalData.moreDetailss?.hometown.city;
console.log(showABC);
const obj = {
  realName: "Alice",
  age: 30,
  address: {
    city: "New York",
    state: "NY",
  },
};

// Extract the "name" and "city" properties from the object into separate variables
const {
  realName,
  address: { city },
} = obj;
console.log(realName); // Alice
console.log(city); // New York
