console.log(2>1)
console.log(1>2) //returns boolean value
//**when different datatypes are compared*** */
// gives sometimes unexpected results
//confusing most of the time and try avoiding these all
// console.log(null>0)  //works in different manner
// console.log(null==0) //works differently in javascript
//  console.log(null>=0)

 //strict check using ===
 console.log("2"==2)// conversion takes place 
 console.log("2"===2)  //for strict check everything should be same includig the data type and no conversion takes place here