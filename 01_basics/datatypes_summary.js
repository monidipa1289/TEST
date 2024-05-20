// console.log("hiii")
// #PRIMITIVE data types ( 7 categories)
// String
// Number
// Boolean
// null // temperature when asked from a server and incase it fails to return , the its a null value and its not 0
// undefined  // variable declared but value is not given
// Symbol // used when one thing is required to be made unique
// BigInt
const score1=100
const score2=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmai //undefined
let username=undefined  //undefined

// const id=Symbol('123')       
// const anotherId=Symbol('123')
//  console.log(id===anotherId)
//  console.log(id==anotherId)   //retuns false as symbol will not allow anothing to be equals to another

// let s1="123"       == double equals check only value equality after converting them into same datatype
// let num1=123       where as === checks datatypes + value equality
// console.log(s1==num1) 

// # REFERENCED TYPE/ NON-PRIMITIVE TYPE
// Arrays
// Objects
// Functions

// Javascript is dynamically typed language where interpreter assigns variables at runtime
// const num=5 num is of type number which is not mentioned explicitly but is known at run-time


const heros =["shaktiman" , "naagraj" , "doga"]
let obj= {
    name:"Moni",
    age:22,
}
 
const myfun = function(){
    console.log("HIIII fucntions");
};

 myfun()
// console.log(ret1)
console.log(typeof myfun)  // fucntion a non-primitive  data-type
console.log(typeof heros)