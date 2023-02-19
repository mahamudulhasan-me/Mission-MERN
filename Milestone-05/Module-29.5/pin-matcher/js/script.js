function randomNumGenerator() {
  const number = Math.round(Math.random() * 10000);
  return number;
}
function getPin() {
  const pin = randomNumGenerator() + "";
  if (pin.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}
document.getElementById("pin_generator").addEventListener("click", () => {
  const number = getPin();
  document.getElementById("show_pin").value = number;
});

document.querySelector(".calc-body").addEventListener("click", (e) => {
  const digit = e.target.innerText;
  const verifyDigit = document.getElementById("verify_pin");

  if (isNaN(digit)) {
    if (digit == "C") {
      verifyDigit.value = "";
    } else if (digit == "X") {
      const digits = verifyDigit.value.split("");
      digits.pop();
      verifyDigit.value = digits.join("");
    }
  } else {
    verifyDigit.value += digit;
  }
});

document.querySelector(".submit-btn").addEventListener("click", (e) => {
  const OTP = document.getElementById("show_pin").value;
  const verifyPin = document.getElementById("verify_pin");
  const verifyPinValue = verifyPin.value;

  const right = document.getElementById("right");
  const wrong = document.getElementById("wrong");
  if (OTP == verifyPinValue) {
    right.style.display = "block";
    wrong.style.display = "none";
  } else {
    wrong.style.display = "block";
    right.style.display = "none";
  }
});
