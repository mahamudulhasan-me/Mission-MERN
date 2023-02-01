const lyrics =
  "Amar sonar bangla ami tomay valobashi, chirodin toamr akhash tomar bathas amar perane bajya bashi, amar sonar bangla ami tomay valobashi";
// split
let parts = lyrics.split(",");
console.log(parts);
let char = lyrics.split("");
console.log(char);

// slice
let myName = "Mahamudul Hasan";
let fName = myName.slice(0, 9);
console.log(fName);
let lName = myName.slice(10);
console.log(lName);
console.log("Full Name: ", fName, lName);

// join
let someLines = ["hey", "bro", "how", "are", "you", "?"];
let newLine = someLines.join(" *");
console.log(newLine);
