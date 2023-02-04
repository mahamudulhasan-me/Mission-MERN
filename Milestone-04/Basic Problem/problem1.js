// 1 থেকে n পর্যন্ত সংখ্যার যোগফল নির্ণয় করো।
let n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log(sum);
// another Way
let summation = (n * (n + 1)) / 2;
console.log(summation);
