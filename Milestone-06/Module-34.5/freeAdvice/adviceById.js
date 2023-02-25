// async function loadAdvice(slip_id) {
//   const response = await fetch(`https://api.adviceslip.com/advice/${slip_id}`);
//   const data = await response.json();
//   console.log(data);

//   displayAdvice(data);
// }
async function loadAdvice(id) {
  const response = await fetch(`https://api.adviceslip.com/advice/${id}`);
  const data = await response.json();
  displayAdvice(data);
  console.log(data);
}
const displayAdvice = (advice) => {
  console.log(advice);

  document.getElementById("advice_no").innerText = advice.slip.id;
  document.getElementById("advice_body").innerText = advice.slip.advice;
};

document.getElementById("search").addEventListener("keyup", (e) => {
  loadAdvice(e.target.value);
});
