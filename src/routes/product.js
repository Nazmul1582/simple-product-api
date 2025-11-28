const express = require("express")
const router = express.Router()
const data = require("../data.json")

router.get("/products", (req, res) => {
  res.status(200).send(data)
})

module.exports = router
