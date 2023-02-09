let forms = document.forms["form1"];
let result = "";
for (const form of forms) {
  result += form.value + "<br>";
}
document.getElementById("result").innerHTML = result;
