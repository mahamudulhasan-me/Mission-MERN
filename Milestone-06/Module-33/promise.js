const paymentStatus = false;
const marks = 90;
function enroll() {
  console.log("Your Enrollment Process is Started");
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (paymentStatus) {
        resolve();
      } else {
        reject("Your Enrollment Process is Failed");
      }
    }, 2000);
  });
  return promise;
}
function progress() {
  console.log("Your Course on now Progress");
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (marks >= 80) {
        resolve();
      } else {
        reject("Your marks is not enough");
      }
    }, 3000);
  });
  return promise;
}
function getCertifications() {
  console.log("Preparing your Certificate");
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Congratulations! Your Certificate has been prepared");
    }, 2000);
  });
  return promise;
}

enroll()
  .then(progress)
  .then(getCertifications)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
