// let products = ["shoes","shirt","jacket"]

// function addToCart(products){
//     return totalAmount;
// }

// function proceedToPayment(totalAmount){

// }

// function paymentMethod(){
//     // cod,upi,card 
// }

// function orderTrack(isSuccessful){

// }


//Pyramid of Doom / Callback hell
// addToCart(
//     proceedToPayment(
//         paymentMethod(
//             orderTrack()
//         )
//     )
// )

// Promise
// Object - State, Result 
// pending, fulfilled, rejected 
// Error Handling
// .then, .catch
// Promise chaining -> functions are attached

// console.log("1")

// let data = fetch("https://jsonplaceholder.typicode.com/todos")
// // .then((response)=>{console.log(response.json())})
// .then(()=>{console.log("data")})

// .catch(()=>{console.log("Unable to fetch the data")})

// console.log("3")
// array of ojects -> json data
// [{},{},{}]

// console.log("1")

// let fetch = new Promise((resolve, reject)=>{
//     // resolve()
//     // reject()
//     // console.log("inside Promise")

//     // console.log("11")
//     // fetch("https://jsonplaceholder.typicode.com/todos")
// })

// console.log("3")

// .then()
// .then()
// .then()
// .catch()

// async-await 

console.log("1")

async function asyncTask (){
    try {
        let data = await fetch("https://jsonplaceholder.typicode.com/todos")
        let user1 = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        console.log("Data:",data)
        console.log("user1:",user1)
        console.log("2")
    } 
    catch (error) {
        console.log(error,"Error While Fetching the data")
        return 
    }
}
asyncTask()

console.log("3")

// 1         1
// data      3
// 2         data
// 3         2