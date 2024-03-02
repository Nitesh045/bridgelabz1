// 1. Read a single digit number and write the number in word
function num(num) {
    if (num < 10) {
        if (num == 0) {
            return "Zero"
        } else if (num == 1) {
            return "One"
        } else if (num == 2) {
            return "Two"
        } else if (num == 3) {
            return "Three"
        } else if (num == 4) {
            return "Four"
        } else if (num == 5) {
            return "Five"
        } else if (num == 6) {
            return "Six"
        } else if (num == 7) {
            return "Seven"
        } else if (num == 8) {
            return "eight"
        } else if (num == 9) {
            return "Nine"
        }
    } else {
        return "Please single digit value"
    }

}
console.log(num(4))


// 2 problem

// Read a Number and Display the week day (Sunday, Monday,...)

function weekDay(num) {
    if (num < 8 ) {
        if (num == 0) {
            return "Sunday"
        } else if (num == 1) {
            return "Monday"
        } else if (num == 2) {
            return "Tueday"
        } else if (num == 3) {
            return "Wen"
        } else if (num == 4) {
            return "Thus"
        } else if (num == 5) {
            return "fri"
        } else if (num == 6) {
            return "Sat"
        }
    } else {
        return "Please enter the value b/w 7 to 0"
    }
}
console.log(weekDay(5));

// 3 pronblem in else if
//Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

function valueCal(input){
  if(input %1==0 && input %10==0){
    if(input==1){
        return "Unit"
    }else if(input==10){
        return "Ten"
    }else if(input==100){
        return "Hundred"
    }else if(input==1000){
        return "Thausand"
    }else if(input==10000){
        return "Ten thausand"
    }else if(input==100000){
        return "lakh"
    }
  }else{
    return "Please Enter A number which is divisible by 10"
  }
}
console.log(valueCal(1000))


// 4 
// Enter 3 Numbers do following arithmetic operation and find the one that

// is maximum and minimum
let maxout=0;
function arithmeticO(a,b,c){
    let result1= (a+b)*c;
    console.log(result1 +"first result")
    let result2= Math.floor((a+c)/b);
    console.log(result2)
    let result3=Math.floor( a%b+c);
    console.log(result3)
    let result4= (a*b)+c;
    console.log(result4)

    if(result1>result2 && result1>result3 && result1>result4){
      maxout=result1
    }else if(result2>result1 && result2>result3 && result2>result4){
        maxout=result2
    }else if(result3>result1 && result3>result2 && result3>result4){
        maxout=result3
    }else if(result4>result1 && result4>result2 && result4>result3){
        maxout=result2
    }else{
        return "somthing"
    }
    

return maxout
}
console.log(arithmeticO(1,2,3))