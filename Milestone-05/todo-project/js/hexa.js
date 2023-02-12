window.onload = function () {
  main();
};
function main() {
  let button = document.getElementById("btn");
  let body = document.getElementById("container");
  let hexaCode = document.getElementById("hexa-code");
  let copyBtn = document.getElementById("copy");

  button.addEventListener("click", () => {
    const bgColor = colorGenerator();
    body.style.backgroundColor = bgColor;
    hexaCode.value = bgColor;
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(hexaCode.value);
    });
  });
}
function colorGenerator() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
