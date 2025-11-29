const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const router = require("./routes/product.js")
const clientIP = require("./middleware/clientIP.js")

app.use("/api", clientIP, router)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
