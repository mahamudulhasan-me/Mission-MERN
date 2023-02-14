function changeInputValue(styleNameId, styleName) {
  const styleId = document.getElementById(styleNameId);
  const inputValue = document.getElementById("input_value");
  styleId.onclick = function () {
    inputValue.setAttribute("style", styleName);
    styleId.classList = "bg-[#94C4FE] text-red-500 p-3 rounded-lg";
  };
}
changeInputValue("bold", "font-weight:900");
changeInputValue("italic", "font-style:italic");
changeInputValue("underline", "text-decoration:underline");

changeInputValue("left_align", "text-align:left");
changeInputValue("center_align", "text-align:center");
changeInputValue("right_align", "text-align:right");
changeInputValue("justify_align", "text-align:justify");

function changeInputValueByValue(font_size) {
  const styleId = document.getElementById(font_size);
  const inputValue = document.getElementById("input_value");
  styleId.onclick = function () {
    inputValue.setAttribute("style", `font-size: ${styleId.value}px`);
  };
}
function changeInputValueByValue(font_color) {
  const styleId = document.getElementById(font_color);
  const inputValue = document.getElementById("input_value");

  styleId.onclick = function () {
    inputValue.setAttribute("style", `color: ${styleId.defaultValue.value}`);
  };
  console.log(styleId.value);
}
