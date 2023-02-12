document.getElementById("btn_login").addEventListener("click", function () {
  const userEmail = document.getElementById("user_email").value;
  const userPassword = document.getElementById("user_pass").value;
  if (userEmail == "kashem@tv.com" && userPassword == "1234") {
    window.location.href = "./bank.html";
  } else {
    alert("Invalid Email or Password");
  }
});
