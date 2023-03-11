function getInputValue(id) {
  const inputID = document.getElementById(id);
  const inputValue = inputID.value;
  //   inputID.value = "";
  return inputValue;
}
// name operation
function sendAndDelete(btn_send, btn_delete, inputName, keyName) {
  document.getElementById(btn_send).addEventListener("click", function () {
    const inputValue = getInputValue(inputName);
    localStorage.setItem(keyName, inputValue);
  });
  document.getElementById(btn_delete).addEventListener("click", function () {
    localStorage.removeItem(keyName);
    clearValue(inputName);
  });
  const data = localStorage.getItem(keyName);
  console.log(data);
  document.getElementById(inputName).value = data;
}
function clearValue(id) {
  document.getElementById(id).value = "";
}
sendAndDelete("btn_send-name", "btn_delete-name", "name", "name");
sendAndDelete("btn_send-email", "btn_delete-email", "email", "email");
sendAndDelete("btn_send-message", "btn_delete-message", "message", "message");

document.getElementById("btn_reset").addEventListener("click", function () {
  localStorage.clear();
  clearValue("name");
  clearValue("email");
  clearValue("message");
});
