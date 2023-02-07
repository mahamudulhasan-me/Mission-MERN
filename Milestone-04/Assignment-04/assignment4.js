/* -----------------------------------------------
Problem 1: Let’s play a mind game
---------------------------------
This program will take a positive number as an argument and return the result after the arithmetic
operation and return an error message if anything other than a positive number is given.
----------------------------------------------- */
function mindGame(positiveNum) {
  if (positiveNum >= 0 && typeof positiveNum === "number") {
    // arithmetic operation of a given number
    return (positiveNum * 3 + 10) / 2 - 5;
  }
  return "Please Give a Positive Number.";
}

/* -----------------------------------------------
Problem 2: Finding even or odd
------------------------------
This function will take a string data as an argument and return "Even" if length of this string
as even  and "Odd" if the length is odd. Any data other than string will return an error message.
----------------------------------------------- */
function evenOdd(str) {
  if (typeof str === "string") {
    // Checking string length
    if (str.length % 2 === 0) {
      return "even";
    }
    return "odd";
  }
  //If the input is not a string, it will return
  return "Please Give a String as Input.";
}

/* -----------------------------------------------
Problem 3: Is Less or Greater than seven
----------------------------------------
This function will take a number as an argument, if this number is less than seven after subtracting
it from seven, it will return the subtraction result. Otherwise, it will return the double of the input.
----------------------------------------------- */
function isLGSeven(number) {
  if (typeof number === "number") {
    let absoluteDiff = number - 7;
    if (absoluteDiff < 7) {
      return absoluteDiff;
    }
    return number * 2;
  }
  //If the input is not a number, it will return
  return "Please Give Any Valid Number.";
}

/* -----------------------------------------------
Problem 4: Finding Bad data
---------------------------
This function will take an array of numbers as an argument, it will return all the bad data 
in this array, i.e. the numbers below zero. Any input other than array will return an error message.
----------------------------------------------- */
function findingBadData(numbersArray) {
  if (Array.isArray(numbersArray)) {
    let badDataCounter = 0;
    const arrayLen = numbersArray.length;
    for (let i = 0; i < arrayLen; i++) {
      // Checking for bad data
      if (numbersArray[i] < 0) {
        badDataCounter++;
      }
    }
    return badDataCounter;
  }
  //If the input is not an array, it will return
  return "Please Give An Array.";
}

/* -----------------------------------------------
Problem 5: Convert your gems into diamond
-----------------------------------------
This function will take the number of gems of three friends as argument and convert the gems to diamonds 
by multiplying them by 21, 32 and 43 respectively. If the number of total diamonds is greater than 2000
then 2000 will be subtracted from the total diamonds and the remaining diamonds will be returned.
----------------------------------------------- */
function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems) {
  if (
    typeof firstFriendGems === "number" &&
    typeof secondFriendGems === "number" &&
    typeof thirdFriendGems === "number"
  ) {
    const firstFriendDiamonds = 21 * firstFriendGems;
    const secondFriendDiamonds = 32 * secondFriendGems;
    const thirdFriendDiamonds = 43 * thirdFriendGems;
    //add three friends diamonds
    let totalDiamonds =
      firstFriendDiamonds + secondFriendDiamonds + thirdFriendDiamonds;
    // Checking for greater than 2000
    if (totalDiamonds >= 1000 * 2) {
      return totalDiamonds - 2000;
    }
    return totalDiamonds;
  }
  //If the three input is not a number, it will return
  return "Please Give a Valid Three Number.";
}
