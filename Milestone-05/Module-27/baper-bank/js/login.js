document.getElementById("login-btn").addEventListener("click", function () {
  const userEmail = document.getElementById("user_email");
  const userPass = document.getElementById("user_pass");
  if (userEmail.value == "bismillah@gmail.com" && userPass.value == "mdun") {
    window.location.href = "./bank.html";
  } else {
    alert("Invalid User Id & Password!");
  }
});
