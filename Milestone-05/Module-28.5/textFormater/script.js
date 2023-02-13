document.getElementById("bold").addEventListener("click", function () {
  const inputValue = document.getElementById("input_value");
  const strong = document.createElement("strong");
  const textContainer = document.createElement("text_container");

  inputValue.style.fontWeight = "bold";
});
