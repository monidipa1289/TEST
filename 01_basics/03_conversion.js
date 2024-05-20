// //..... string to number.......
// let score ="33"
// console.log(typeof(score))  //find type of score
// console.log(typeof score)  // same as previous

// let valInNumber=Number(score)  // the score value is converted to number
// console.log(typeof score)   //score is still a string
// console.log(typeof valInNumber)  
// console.log( valInNumber )

// //notes .. "33"=> 33
// //    "33abs" => NaN not a number  but its type is a number because, we have converted it manuallly
// // true=> 1; false=>0

// //...... string to boolean....
//  let isLoggedIn= 1 // a number
//  let booleanIsLoggedIn= Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn)  //returns true

//  let namee="MOni"
//  let booleanName= Boolean(namee)
//  console.log(booleanName)  // return true , 
//  namee=""
//  booleanName=Boolean(namee)
//  console.log(booleanName)    // return false, empty string when converted to boolean gives false

//  // ""=> false
//  //"Moni"=> true
//  //....... number to string....
//  let someNumber=33
//  let stringNumber= String(someNumber)
//  console.log(stringNumber)
//  console.log(typeof stringNumber)

 //**********OPERATIONS******

 let value=3
 let negVal= -value
//  console.log(negVal)
//  console.log(2**2) //2^2
//  console.log(2**3) // 2^3
//  console.log(2*2)
//  console.log(2/3)
//  console.log(2%3)

let str1="hello"
 let str2=" Moni"
 let str3= str1+str2;
//  console.log(str3)
//**IMPORTANT**
// console.log("1"+2) //12
// console.log(1+"2") //12
// console.log("1"+2+2)  //122
// console.log(1+2+"2")//32
// console.log(1+2+3+"3"+"2"+1)  //6321

//**TRICKY CONVERSION**
// console.log(+true)
x=2;  
// console.log(++x)  //pre-increment operator in javascript
// study the operator preference
let num1, num2, num3
num1=num2=num3=2;
// console.log([num1,num2,num3])

let gameCounter=100
gameCounter++;  //101
console.log(gameCounter)
//prefix and posfix operator
console.log(++gameCounter) //prefix =>102
console.log(gameCounter++)  // postfix=>102 in given output and after output being produced the incrementation happens
console.log( gameCounter) //after incrementation from prev step=>103