// const mysql = require("mysql2")

// const pool = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     database: "mern124",
//     password : "luvhirani"
// })

// module.exports = pool.promise();

const mongoose = require("mongoose")

async function connectDB(){
  try {
   await mongoose.connect("mongodb://localhost:27017/mern124")
   console.log("MongoDb connected Successfully")
  } catch (error) {
   console.log(error)
  }
}

module.exports = {connectDB};
