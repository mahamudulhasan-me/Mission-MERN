const lyrics =
  "Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomay bolte pari ni. tumi bondhur kala paki";
const doesExit = lyrics.includes("pakhi");
console.log(doesExit);
console.log(lyrics.indexOf("heybor"));
if (lyrics.indexOf("bonfddhu") !== -1) {
  console.log("exist inside the string");
} else {
  console.log("Cant find it");
}
// startsWith
console.log(lyrics.startsWith("Tumi"));
// endsWith
console.log(lyrics.endsWith("paki"));
