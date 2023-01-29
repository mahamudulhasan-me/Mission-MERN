// তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে।

var myMoney = 50000;

if (myMoney >= 80000) {
  console.log("I will buy a mac");
} else if (myMoney >= 60000) {
  console.log("I will buy a gaming laptop.");
} else if (myMoney >= 40000) {
  console.log("I Will buy a lenovo yoga");
} else if (myMoney >= 20000) {
  console.log("I Will buy a secondhand laptop");
} else {
  console.log("I continue my work by mobile phone");
}
