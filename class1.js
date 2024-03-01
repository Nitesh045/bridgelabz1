console.log("hello,World !"); //first 

// Random Function for single digit
let num = Math.floor(Math.random()*10);
console.log(num)

// generate verifaction code by math.random
let password="";
let code = "";
function genrater(code){
    
    for(let i=0; i < code;i++ ){
      password+=Math.floor(Math.random()*10)
    }
    
    console.log(password)
    return password
}
console.log(genrater(4))
var val; 
val ="foo";
console.log(typeof val)
// if else condtition conditional statetnment
function condition(age){
    if(age>=14 && age<19){
        return "eligible"
    }else{
        return "Not Eligible"
    }
}
console.log(condition(20))


// Ability to check Employee is present or absent


function presentAbsent(rollno){
    let num = Math.floor(Math.random()*10);
    console.log(num)
    if(num==rollno){
        return "Present"
    }else{
        return "Absent"
    }
}
console.log(presentAbsent("4"));