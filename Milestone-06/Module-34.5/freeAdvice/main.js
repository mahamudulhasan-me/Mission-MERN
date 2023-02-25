async function loadAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  displayAdvice(data);
}
const displayAdvice = (advice) => {
  console.log(advice);

  document.getElementById("advice_no").innerText = advice.slip.id;
  document.getElementById("advice_body").innerText = advice.slip.advice;
};

loadAdvice();
