const express = require("express")
const productRoutes = require("./routes/productRoutes")
const app = express()
// const db = require("./config/db")
const {connectDB} = require("./config/db")
const userRoutes = require("./routes/userRoutes")

app.use(express.json())

// app.get('/', (req, res) => {
//     res.send('hello world')
// })

// app.get('/users',(req,res) =>{
//     res.send('These are list of users')
// })

// app.get('/sellers',(req,res) =>{
//     res.send('These are list of sellers')
// })

// db
connectDB()


app.use("/product", productRoutes)
app.use("/user",userRoutes)

app.listen(3003, () => {
    console.log('Server is running on http://localhost:3003')
})

// http method -> GET, PUT, POST, DELETE
// /users,/sellers -> routes
// function -> controller

// MVC -> Model , View, Controller