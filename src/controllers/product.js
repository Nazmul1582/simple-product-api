const data = require("../data.json")

const filteredPorducts = data.products.map((p) => ({
  id: p.id,
  name: p.name,
  slug: p.slug,
  price: p.price,
  stock: p.stock.total,
  category: p.category.main,
  tags: p.category.tags.join(", "),
  supplierName: p.supplier.name,
  reviews: p.reviews.length,
}))

const getProducts = (req, res) => {
  res.status(200).json(filteredPorducts)
}

const getProduct = (req, res) => {
  const id = parseInt(req.params.id)
  const product = data.products.find((p) => p.id === id)
  res.status(200).json(product)
}

module.exports = { getProducts, getProduct }
