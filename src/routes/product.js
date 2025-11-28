const express = require("express")
const router = express.Router()
const data = require("../data.json")
const { getProducts } = require("../controllers/product")

router.get("/products", getProducts)

module.exports = router
