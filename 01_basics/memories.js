// ****stack and heap memory*****
//stack(primitive)=>copy of original=> similar to call by value
//heap(non-primitive)=>reference to original value=> call by reference

let myName="monidipa"
let anotherName=myName  //a copy is given
anotherName= "Mahi"
console.log(anotherName)
console.log(myName)
// console.log(anotherName)

let user1={
    email:"monidipadas18@gmail.com",
    name:"Raj",
}
let user2=user1 //reference is given

user2.email="mahiroy@gmail.com" //on changing user2 email, user1 email also get changed asuser2 is reference to user1
// user2 points to the same heap memeory location as of user1
// so any changes made in any one of them, will be reflected in both of them
console.log(user1.email)