// console.log(Math)  //object   and has many properties
// console.log(Math.abs(-754))   //absolute
// console.log(Math.round(4.3))  //round off, removing after decimal part
// with property () is not used 
// with function () is used
// console.log(Math.ceil(4.2))  // uper value=>5
// console.log(Math.floor(4.2))  // neeche wla value => 4
// console.log(Math.min(4,3,5,6,6,6))  // min of an array
// console.log(Math.random())  // values lies between [0-1)
// console.log(Math.random()*10)  // values lies between [0, 10)
// console.log(Math.floor((Math.random()*10))+1)// range=>[1 ,10]

const min=10
const max=20
// gives number between 10-20
console.log(Math.floor(Math.random()*(max-min+1)) +min)