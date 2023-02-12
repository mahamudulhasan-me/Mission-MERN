window.onload = function () {
  main();
};
function main() {
  let button = document.getElementById("btn");
  let body = document.getElementById("container");
  let hexaCode = document.getElementById("hexa-code");

  button.addEventListener("click", () => {
    body.style.backgroundColor = colorGenerator();
    hexaCode.value = colorGenerator();
  });
}
function colorGenerator() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
