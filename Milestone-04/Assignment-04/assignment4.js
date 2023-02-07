/* -----------------------------------------------
Problem 1: Let’s play a mind game
---------------------------------
This program will take a positive number as an argument and return the result after the arithmetic
operation and return an error message if anything other than a positive number is given.
----------------------------------------------- */
function mindGame(number) {
  if (number >= 0 && typeof number === "number") {
    // arithmetic operation of a given number
    return (number * 3 + 10) / 2 - 5;
  }
  return "Oops! Please Give a Positive Number.";
}

/* -----------------------------------------------
Problem 2: Finding even or odd
------------------------------
This program will take a string data as an argument and return "Even" if length of this string
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
  return "Oops! Please Give a String Input.";
}

/* -----------------------------------------------
Problem 3: Is Less or Greater than seven
----------------------------------------
This program will take a number as an argument, if this number is less than seven after subtracting
it from seven, it will return the subtraction result. Otherwise, it will return the double of the input.
----------------------------------------------- */
function isLGSeven(num) {
  if (typeof num === "number") {
    let absoluteDiff = num - 7;
    if (absoluteDiff < 7) {
      return absoluteDiff;
    }
    return num * 2;
  }
  //If the input is not a number, it will return
  return "Oops! Please Give Any Number.";
}

/* -----------------------------------------------
Problem 4: Finding Bad data
---------------------------
This program will take an array of numbers as an argument, it will return all the bad data in this array,
i.e. the numbers below zero. Any input other than array will return an error message.
----------------------------------------------- */
function findingBadData(numbersArray) {
  if (Array.isArray(numbersArray)) {
    let badDataCounter = 0;
    const arrayLen = numbersArray.length;
    for (let i = 0; i < arrayLen; i++) {
      if (numbersArray[i] < 0) {
        badDataCounter++;
      }
    }
    return badDataCounter;
  }
  return "Oops! Please Give An Array.";
}

/* -----------------------------------------------
Problem 5: Convert your gems into diamond
----------------------------------------------- */
function gemsToDiamond(firstFrndGems, secondFrndGems, thirdFrndGems) {
  if (
    typeof firstFrndGems === "number" &&
    typeof secondFrndGems === "number" &&
    typeof thirdFrndGems === "number"
  ) {
    const firstFrndDiamonds = 21 * firstFrndGems;
    const secondFrndDiamonds = 32 * secondFrndGems;
    const thirdFrndDiamonds = 43 * thirdFrndGems;
    //add three friends diamonds
    let totalDiamonds =
      firstFrndDiamonds + secondFrndDiamonds + thirdFrndDiamonds;
    if (totalDiamonds > 1000 * 2) {
      return totalDiamonds - 2000;
    }
    return totalDiamonds;
  }
  return "Oops! Please Give a Valid Three Number.";
}
