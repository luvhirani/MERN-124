// console.log("Javascript Day 2")



// let a = 10;
// let b = 15;

// let c = a+b;

// console.log(typeof a)

// let d 
// let e = false
// let fName = "Raj"
// console.log(typeof e)
// console.log( typeof fName)
// console.log(typeof d)

// let age = null
// console.log(typeof age)

// console.log(1)
// console.log(2)
// console.log(3)

//non primitive 
// 1. array
// 2. object

// let arr = ["mohit","garvit","lokesh",]
// let arr1 = [1,2,3,4,5]
// let arr2 = ["aryan","satyam",12,23,45,true,false]

// console.log(typeof arr)
// console.log(arr1)
// console.log(arr2)

// object 
let developer = {
    name: "neha",
    id: 11,
    isEnrolled: true,
    marks: [12,13,24]
}

// console.log(developer)

// Operators
// 1. Arithmatic
// +,-,*,/,%, ++,--

// let a = 20
// let b = 20
// let c = "20"


// console.log(a+b)
// console.log(10+5)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)
// console.log(5%10)
// console.log(a *= b) 
//  a = a*b




// ++,--
// pre , post


// let a = 5

// console.log(++a)
// console.log(a++)
// console.log(a)

// console.log()
// console.log(--a)
// console.log(a--)   
// console.log(a)

// console.log(4++)
// console.log(4--)
// console.log(--4)




// 2. Comparison Operators
// >,<,>=,<=,==,===

// console.log(a>b)
// console.log(a<b)
// console.log(a<=b)
// console.log(a>=b)
// console.log(a==b)
// console.log(b==c)

// console.log(a===b)
// console.log(b===c)

//3. assignment operator
// =


// 4. logical operators
// &&, ||, !

// console.log(a==b || a<b)
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// truthy and falsy values
// 20->true
// 0-> false

// "0"-> true 
// "" -> 

// let a = 20
// let b = 0
// let c = "20"
// console.log(!false)
// console.log(!(b===c))
// console.log(b===!c)
// console.log(!c)



// let var and const 

// TDZ-> Temporal Dead Zone
// console.log(fullName)
// console.log(age)
// console.log(city)


let fullName = "Raj sharma"
var age = 20
const city = "jaipur"

{
    // console.log(fullName)
    // console.log(age)
    // console.log(city)
}

// batch = 116

{
    // let fullName = "Raj sharma"
    // var age = 20
    // const city = "jaipur"
}

    // console.log(fullName)
    // console.log(age)
    // console.log(city)

//  fullName = "Mohit kumawat"
//  age = 21
//  city = "kota"

// console.log(fullName)
// console.log(age)
// console.log(city)

// variable declaration
// let isActive 

// initialization
// isActive = true


// console.log(batch)
// console.log(isActive)

// scope -> block, local, global, 

//          redeclare   scope      reassign           hoisting
// let        no         block       yes       ES6     no
// const      no         block       no        ES6     no
// var        yes        global      yes               yes

// conditional statements
// 1. if-else, else-if 
// 2. switch

// if(condition){
//     condition==true
// }
// else{
//     condition==false
// }


// let age = 19

// for single condition
// if(age>=18){
//     console.log("you can vote")
// }
// else{
//     console.log("you cannot vote")
// }

// for multiple conditions
// let marks = 25

// let english = 56
// let hindi = 65

// if(marks >= 90){
//     console.log("Grade A")
// }
// else if(marks >= 75){
//     console.log("Grade B")
// }
// else if( marks >= 35){
//     console.log("Fail")
// }
// else{
//     console.log("Invalid marks")
// }


// if(english >=50 && hindi >= 50){
//     console.log("Pass")
// }

// else{

// }

// nested if-else
// let attandance = 78
// if(attandance >= 75){
//     if(english >=50 && hindi >= 50){
//         console.log("Eligible And Passed")
//     }
//     else{ console.log("Eligible but not passed")}
// }
// else{
//     console.log("not eligible")
// }

// let day = 5


// switch (day) {
//     case 1:console.log("Monday")
//     break;
//     case 2:console.log("Tuesday")
//     break;
//     case 3:console.log("Wednesday")
//     break;
//     case 4:console.log("Thursday")
//     break;
//     case 5:console.log("Friday")
//     break;
//     case 6:console.log("Saturday")
//     break;
//     case 7:console.log("Sunday")
//     break;
//     default: console.log("Invalid day")
//     break;
// }


// loops
// for, while
// for(init; condition; inc/dec) {}


// for(let i = 0; i<=10; i++ ){
    //     console.log(i,"Hello World")
    //     // console.log(i)
    // }

// let j = 20;
// for(j; j=0; j-- ){
    // console.log(j,"Hello World")
    // console.log(i)
// }

// let i = 20
// while(i<=100){
//     console.log(i)
//     i++
// }

// case-> Camel Case, Snake case 

// Fetchuser
// fetchUser
// deleteUser

// getUserData
// deleteUserData

// Functions What ? why ? How?
// Reusable block of code which is used to perform some specific task

// let a = 10;
// let b = 20;

// let c = a+b;

// function creation / Function Declaration
// a,b -> parameters
function sum (a,b){
    let c = a+b
    // console.log(a+b)
    return c
}

// function invoke
// 15,20 -> arguments
let sumOfTwo = sum(15,20)
// console.log(sumOfTwo)
// sum(30,50)
// sum(12,12) 


// Function Expression
let multiplication = function (a,b,c=2){
    console.log(a,b,c)
    // console.log(a*b)
    return a*b*c
}

// console.log(multiplication(10,5,3))
// multiplication(5,8)

// Arrow function
let subt = (a,b) => {console.log(a-b)}

// subt(10,5)
// subt(15,5)


let div = (a,b) => a/b

// console.log(div(10,5))

// array 
// collection of similar elements 
// let arr = [1,2,3,4]

// let n = arr.length

// console.log(arr[n-1])
// properties and methods

// console.log(arr.length)

// push, pop, shift, unshift
// push-> inserts element to the last of an array 
// pop -> removes element from last
// arr.push(5)

// arr.pop()
// console.log(arr)

// arr.unshift(5)
// console.log(arr)

// arr.shift()
// console.log(arr)

let arr1 = [3,1,5,4,10,9,7]
let arr2 = [4,5,6]
// let arr3 = [arr1 +","+ arr2]

// let arr3 = arr1.concat(arr2)
// console.log(arr1.sort((a,b)=> b-a))

// console.log(arr1.indexOf(9))
// console.log(arr1.at(4))

// console.log(arr1)

// console.log(typeof arr1)

//  slice
// let newArr = arr1.slice(2)
// console.log(newArr)

// splice
// let splicedArr = arr1.splice(2,0,'a','b')

// console.log(arr1)
// console.log(splicedArr)

// for-each
// works with array only, does not change the orig array, 
let arr3 = [1,2,3,4,5]
let str3 = "Hello World"

let forEach = arr3.forEach((value,index)=>{
    console.log("Value:",value)
    // console.log("Index:",index)
    // return {value,index};
})

console.log(forEach)

// for-of
// array and string
// for(let nums of arr3){
//     console.log(nums+1)
//     return nums*2
// }
for(let words of str3){
    console.log(words)
}



// map(), filter(), reduce()
// hof, cf
// let arr3 = [1,2,3,4,5]

// let square = arr3.map((number,index)=>{
//     let sqNum = number * number
//     console.log("Sqaured number:",sqNum,"index of number:",index)
// })

// filter 
// let evenNum =  arr3.filter((value)=>{
//     return value % 2 == 0;
// })

// console.log(evenNum)

// reduce 
// let sumOfArr = arr3.reduce((acc,curr)=>{
//     let result = acc + curr
//     return result
// },10)

// console.log(sumOfArr)

// strings
let str = "HELLO";
// let trimStr = str.trim()
let str1 = 'world'
// let str2 = str +" "+ str1
let str2 = str.concat(" ",str1)
// let trimStr1 = str2.trim()

// console.log(typeof str)
// console.log(typeof str1)
// console.log(str2)

// console.log(str.length)
// console.log(trimStr.length)
// console.log(str2.length)
// console.log(trimStr1.length)
// let replacedStr = str1.replace("world","dunia")
// console.log(replacedStr)
// str1.replace("world","dunia")
// console.log(str1)

// console.log(str1.toUpperCase())
// console.log(str2)
// console.log(str2.split(" "))
// console.log(str.substring(1,3))
// console.log(str.includes("hello"))

// console.log("hello" == "HELLO")

// string template literals
let name = "Raj"

// console.log("Hello, Good Morning . How are you ?",name)
// console.log(`Hello, Good Morning ${name}. How are you ${name} ?`)

// Objects 
let laptop = {
    color : "grey",
    company : "HP",
    size : "16 inch",
    power: (pressButton)=>{
        // on/off 
        console.log("PowerOn")
    },
    trackPad: function (a,b){
        console.log("cursor")
    },
    features: {
        processor : "i7"
    }
}

// for-in
// works in objects only 
for(let key in laptop){
    console.log(key)
}

// let laptopColor = laptop.color;
// console.log(laptopColor)

let {color} = laptop
// console.log(color)

// console.log(laptop.color)
// console.log(laptop.company)
// laptop.trackPad()

// laptop.color = "black";
// laptop.price = "50,000";
// console.log(laptop);

// console.log(Object.keys(laptop))
// console.log(Object.values(laptop))
// console.log(Object.entries(laptop))

// let a = 10 
// let b = a 

// object cloning
// shallow copy
// let laptop2 = laptop;

// let laptop2 = Object.assign(laptop)

// using spread operator
// let laptop2 = {...laptop}

// Deep Copy
// object -> string -> object
// let laptop2 = JSON.parse(JSON.stringify(laptop));

// laptop2.color = "black"
// laptop2.price = "40,000"
// Objects in JS are being copied by reference/address and not by value 

// console.log(laptop)
// console.log(laptop2)


// Date object 
// let currDate = new Date()
// console.log(currDate.getDate())
// console.log(currDate.getDay())
// console.log(currDate.getTime())
// console.log(currDate.getMinutes())
// console.log(currDate.getMinutes())

// Math
// console.log(Math.PI)

// console.log(Math.random())
// let randomNumber = Math.random() * 10
// console.log(randomNumber)
// let otp = Math.ceil(randomNumber)
// console.log(otp)
// console.log(Math.ceil(6.5))
// console.log(Math.floor(6.9))
// console.log(Math.round(6.5))


// Timer Functions
// setTimeout, setInterval

// setInterval(()=>{
//     console.log("Inside setInterval Function")
// },5000)

// console.log("1")

// setTimeout(()=>{
//     console.log("Inside setTimeout Function")
// },3000)

// function sync (){
//     console.log("inside function")
// }
// sync()

// console.log("2")


// iife -> immediately invoked function expression
// (function (){
//     console.log("inside iife")
// })();