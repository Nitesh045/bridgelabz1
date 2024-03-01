function condition(age) {
    if (age >= 14 && age < 19) {
        return "eligible"
    } else {
        return "Not Eligible"
    }
}
console.log(condition(20))


// practice ploblems

// Write a program that reads 5 Random 3 Digit values and then outputs the minimum
// and the maximum value

let arr = [];
let digit = "";
let max = 0;
let min = 0;
function minmax(input) {
    for (let i = 0; i < input; i++) {
        let num = Math.floor(Math.random() * 1000)
        arr.push(num)
    }

    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        //max=arr[i]
        for (j = i + 1; j < arr.length; j++) {
            // for maximum num 
            if (arr[i] > arr[j]) {
                max = arr[i];
            } else {
                max = arr[j]
            }
            // for min num
            if (arr[i] > arr[j]) {
                min = arr[j]
            } else {
                min = arr[i]
            }
        }

    }
    console.log(max, min)
}
minmax(5);


// // Write a program that takes day and month from the command line and prints true if

// day of month is between March 20 and June 20, false otherwise.
let months = ["March", "April", "may", "june"]
function monthdate(m, day) {
    //    for(let i=0;i<months.length;i++){
    //        if(months[i]==m && day>=20){
    //         console.log("true")
    //        }
    //        if(months[i]!==m){
    //         console.log("false")
    //        }
    //    }

    if (day >= 20 && day < 31) {
        months.find((fm) => {
            if (fm == m) {
                console.log(`true ${fm, m}`)

            }
            if (fm !== m) {
                return false
            }
        })
    }
}
monthdate("March", 25);


// Write a program that takes a year as input and outputs the Year is a Leap Year or not
// a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless
// divisible by 400.


function LeapY(year) {
    if (year % 400 == 0 && year % 100 == 0) {
        console.log(`year ${year} is leap year `)
    } else if (year % 4 == 0 && year % 100 !== 0) {
        console.log(`${year} is leap year`)
    } else {
        console.log(`${year} is not leap year`)
    }
}
LeapY(2020)

// Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.
let coin = ["head", "Tails"]
function flip() {
    let randn = Math.round(Math.random());
   if(randn==1){
    return coin[1]
   }else{
    return  coin[0]
   }
}
console.log(flip());