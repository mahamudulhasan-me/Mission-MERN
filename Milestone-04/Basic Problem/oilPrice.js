// Problem 3:  oilPrice
// ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে।

// প্রতি লিটার ডিজেলের এর দাম – 114 টাকা
// প্রতি লিটার পেট্রোল এর দাম – 130 টাকা
// প্রতি লিটার অকটেনের এর দাম – 135 টাকা

// এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের  অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে
//  হলো সেই সংখ্যা রিটার্ন করতে হবে।
function oilPrice(diesel, petrol, octane) {
  const dieselPrice = 114;
  const petrolPrice = 130;
  const octanePrice = 135;
  const totalDieselPrice = dieselPrice * diesel;
  const totalPetrolPrice = petrolPrice * petrol;
  const totalOctanePrice = octanePrice * octane;
  const totalPrice = totalDieselPrice + totalPetrolPrice + totalOctanePrice;
  return totalPrice;
}
console.log(oilPrice(1, 1, 1));
console.log(oilPrice(30, 20, 10));
console.log(oilPrice(1, 0, 2));
console.log(oilPrice(0, 2, 3));
