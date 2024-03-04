// first problem 
let dogs = ["Bulldog", "beagle", "Labrador"];
// old way
let alldogs = "";
for (let i = 0; i < dogs.length; i++) {
    alldogs += dogs[i] + " ";
}
console.log("OLD" + " " + alldogs);

// new way 

let dog = "";
for (let d of dogs) {
    dog += d + " ";
}
console.log("NEW" + " " + dog)


// Write a program that takes a command-line argument n and prints a table of the

//powers of 2 that are less than or equal to 2^n.
let table = 1;
function powerC(input) {
    for (let x = 0; x < input; x++) {
        table = table * 2

    }

    return table;

}

console.log(powerC(4));


// Write a program that takes a command-line argument n and prints the nth harmonic

//number. Harmonic Number is of the form

let n = "";
function harnonic(value) {
    for (let i = 1; i <= value; i++) {
        if (i < value) {
            n += (`1/${i} + `)
        } else {
            n += (`1/${i}  `)
        }
    }
    return n;
}

console.log(harnonic(5));


// 3 Write a program that takes a input and determines if the number is a prime.
function checker(val) {
    for (let i = 2; i < val; i++) {
        // for removing last + sign 
        if (val % i == 0) {
            return `${val}  is not a prime number`

        } else {
            return `${val}  is  a prime number`
        }
    }

}
console.log(checker(3));


//4 Extend the program to take a range of number as input and output the Prime

//Numbers in that range.

function isprimeNumber(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false
        }
    }
    return true

}

function rangePrime(s, e) {
    for (let i = s; i < e; i++) {
        if (isprimeNumber(i)) {
            console.log(i)
        }
    }
}
rangePrime(20, 50)

// factorial num
// Write a program that computes a factorial of a number taken as input.

// 5 Factorial – 5! = 1 * 2 * 3 * 4 * 5
let ans = 1;
function factorial(f) {
    for (let i = 1; i <= f; i++) {
        console.log(i)
        ans = i * ans

    }
    return ans
}
console.log(factorial(6));

// 6 Write a program to compute Factors of a number N using prime factorization method.

let factorialN="";
function primeFactorial(p){
     
     for(let i=2; i <= p;){
        if(p%i==0){
            factorialN+=`${i} ,`
            p=p/i;
            console.log(p);
            
        }else{
            i++
        }
     }
     return factorialN
}
console.log(primeFactorial(40));