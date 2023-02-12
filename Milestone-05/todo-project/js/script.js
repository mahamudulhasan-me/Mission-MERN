window.onload = function () {
  main();
};

function main() {
  const container = document.getElementById("container");
  const button = document.getElementById("btn");
  button.addEventListener("click", function () {
    const color = colorGenerator();
    container.style.backgroundColor = color;
  });
}
function colorGenerator() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
}
