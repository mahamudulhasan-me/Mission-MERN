const marks = 30;
const diviMarks = parseInt(marks / 10);
switch (diviMarks) {
  case 10:
  case 9:
  case 8:
    console.log("You got A+");
    break;
  case 7:
    console.log("You got A");
    break;
  case 6:
    console.log("Your got A-");
    break;
  case 5:
    console.log("You got B");
    break;
  case 4:
    console.log("Your got C");
    break;
  default:
    console.log("Failed");
}
