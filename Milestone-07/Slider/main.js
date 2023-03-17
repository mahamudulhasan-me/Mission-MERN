const imageList = [
  "./img/1.jpg",
  "./img/2.jpg",
  "./img/3.jpg",
  "./img/4.jpg",
  "./img/5.jpg",
  "./img/6.jpg",
];

let counter = 0;
setInterval(() => {
  if (counter === imageList.length) {
    counter = 0;
  }

  const img = document.getElementById("slider");
  img.src = imageList[counter];
  //   img.setAttribute("src", imageList[counter]);

  counter++;
}, 1000);
