const { addProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct } = require("../controllers/product.controller");

const express = require('express')
const router = express.Router();

router.get("/getAllProducts", getAllProducts)
router.get("/:id", getSingleProduct)

router.post("/", addProduct)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)

module.exports = router