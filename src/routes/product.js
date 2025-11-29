const express = require("express")
const router = express.Router()
const { getProducts, getProduct } = require("../controllers/product")

router.get("/products", getProducts)
router.get("/product/:id", getProduct)

module.exports = router
