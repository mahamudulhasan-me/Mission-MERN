function hourToMinSec(hours) {
  let minutes = hours * 60;
  console.log(hours, "Hours =", minutes, "Minutes");
  let seconds = minutes * 60;
  console.log(hours, "Hours =", seconds, "Seconds");
}
let hours = 8;
let myHoursToMin = hourToMinSec(hours);
