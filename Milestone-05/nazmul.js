// it will be take positive number as a InputDeviceInfo.  (input number *3)= result + 10 = result/2 = result - 5 the output should be returned

/* function mindGame (number) {
    if(number < 0){
        return "this is not valid number ";

    }
    let mult = number*3;
    let add = mult + 10;
    let divi = add/2;
    let sub = divi - 5;
    return sub;
    
}
const result = mindGame(33); */
// console.log(result);

// it will take a string as input ,the total number of characters in the string will be output based on that.output will be "even" or "odd" .

/* function evenOdd(name) {
    if(name.length%2==0 ){
        return "even";
    }
    else{
        return"odd";
    }
    
}
const result = evenOdd("chatgpt"); */
// console.log(result);

// it will take the number as ainput .you have to find the difference between the input number and 7.if this difference is less than 7 then you have to return the difference between that input and capacity otherwisw you have to return double of their absolut difference

/* function isLGSeven(number) {
   let absulet = number-7;
   
   if(absulet>7){
    return (number*2);
   }
   return absulet;
    
}
const result = isLGSeven(15) */
//  console.log(result);

// Array should be taken as input ,how many negative number there and that nunber should be returned

/* function findingBadData(array) {
    let count = 0;
for(let i =0;i < array.length;i++){
    const element = array[i];
    if(element<0) count++;

    }
    return count;
}

const numbers =[ -4, -9, -5, -33, -55 ];
const result = findingBadData(numbers);
  console.log(result); */

// need three input parameter,1st perameter 1st friend gems ,and 2nd perameter 2nd friend gems,3rd perameter 3rd friend gems.(1st friend gems*21) + (2nd friend gems *32) + (3rd friend gems *43).if total gems is less then 2000 then return this result but if total gems is geterthen 2000 then (totalgems-2000) and return.

/* function gemsToDiamond(num1,num2,num3) {
    let firstFriendGems = num1*21;
    let secondFriendGems = num2*32;
    let thirdFriendGems = num3*43;
    const total =firstFriendGems + secondFriendGems +thirdFriendGems;
    if(total >2000){
        finalResult = total-2000;
        return finalResult;
    }
    else{
        return total;
    }
    
    
}
const result = gemsToDiamond(1,1,1); */
//   console.log(result);
