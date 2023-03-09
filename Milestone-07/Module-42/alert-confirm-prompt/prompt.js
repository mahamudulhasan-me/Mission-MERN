function showPrompt() {
  const result = prompt("Please enter your name");
  if (result === null || result === "") {
    alert("Nam nai to kam nai dur halar ho put");
  } else {
    alert(`Hello ${result}`);
  }
}
