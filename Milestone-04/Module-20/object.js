const myInfo = {
  fName: "Mahmudul",
  lName: "Hasan",
  job: "Sundarban",
  age: 24,
  height: "5.6'",
  home: "Gaibandha",
};
// Varius way to accesc value from object
// let fullName = myInfo.fName + " " + myInfo.lName;
// console.log(fullName);
// let Age = myInfo["age"];
// console.log(Age);
// let District = "home";
// let homeDistrict = myInfo[District];
// console.log(homeDistrict);
// let allKeys = Object.keys(myInfo);
// console.log(allKeys);
// let allValues = Object.values(myInfo);
// console.log(allValues);
// Various way to update object value
console.log(myInfo);
myInfo.age = 24.5;
console.log(myInfo);
myInfo["home"] = "Rangpur";
console.log(myInfo);
let newInfo = "IIML";
myInfo["job"] = newInfo;
console.log(myInfo);
myInfo["martialStatus"] = "Unmarried";
console.log(myInfo);
