const pool = require("../config/db")

const createProduct = async function (req,res){
   try {
    // console.log(req.body)
    let {pId, pName, price, category} = req.body
    console.log(pId,pName,price,category)

    const response = await pool.query("INSERT INTO products VALUES (?,?,?,?)",[pId,pName,price,category]);

    console.log(response)

    res.status(201).send({message: "Created product succesfully",response })
   } catch (error) {
    console.log(error)
   }
}

const updateProduct = async function (req,res){

    try {
        // console.log(req.params.id)
        let pId = req.params.id;
        let {pName, price, category} = req.body
        let response = await pool.query("UPDATE products SET pName = ? ,price = ?,category = ? WHERE pId = ?",[pName,price,category,pId])

        res.send({message: "Updated product succesfully", UpdatedProduct : response})
    } catch (error) {
        console.log(error)
    }
}

const deleteProduct = async function (req,res){
   try {
    let pId = req.params.id;
    let response = await pool.query("DELETE FROM products WHERE pId = ?",[pId])
    res.send({message:"deleted product succesfully",response})
   } catch (error) {
    console.log(error)
   }
}

const getAllProducts = async function (req,res){
    try {
        const [response] = await pool.query("SELECT * FROM products")
        res.send({message: "Get product succesfully", products : response})
    } catch (error) {
        console.log(error)
    }
}

const getProduct = async function (req,res) {
    try {
        
    } catch (error) {
        
    }
}

module.exports = {createProduct,getAllProducts,updateProduct,deleteProduct,getProduct}