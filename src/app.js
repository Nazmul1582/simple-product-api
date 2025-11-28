const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const router = require("./routes/product.js")

app.use("/api", router)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
