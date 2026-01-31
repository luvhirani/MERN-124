const express = require("express")
const {createProduct,updateProduct,getAllProducts,deleteProduct,getProduct} = require("../controller/productController")

const router = express.Router();

router.post("/createProduct", createProduct )
router.put("/updateProduct/:id", updateProduct )
router.delete("/deleteProduct/:id", deleteProduct )
router.get("/getAllProducts", getAllProducts )
router.get("getProduct",getProduct)


module.exports = router;