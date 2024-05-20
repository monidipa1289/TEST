//..... string to number.......
let score ="33"
console.log(typeof(score))  //find type of score
console.log(typeof score)  // same as previous

let valInNumber=Number(score)  // the score value is converted to number
console.log(typeof score)   //score is still a string
console.log(typeof valInNumber)  
console.log( valInNumber )

//notes .. "33"=> 33
//    "33abs" => NaN not a number  but its type is a number because, we have converted it manuallly
// true=> 1; false=>0

//...... string to boolean....
 let isLoggedIn= 1 // a number
 let booleanIsLoggedIn= Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn)  //returns true

 let namee="MOni"
 let booleanName= Boolean(namee)
 console.log(booleanName)  // return true , 
 namee=""
 booleanName=Boolean(namee)
 console.log(booleanName)    // return false, empty string when converted to boolean gives false

 // ""=> false
 //"Moni"=> true
 //....... number to string....
 let someNumber=33
 let stringNumber= String(someNumber)
 console.log(stringNumber)
 console.log(typeof stringNumber)