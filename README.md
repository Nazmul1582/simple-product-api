# A Simple Product API using JSON File Storage

A simple Node.js/Express REST API for managing product information using JSON file storage

## Insttallation

**1. Clone the repository:**

```bash
    git clone https://github.com/Nazmul1582/simple-product-api.git
    cd simple-product-api
```

**2. Install dependencies:**

```bash
    npm install
```

**3. Start the server:**

```bash
    npm start
```

The server will run on "http://localhost:3000"

## Features

- Get all products with sumirized information
- Get detailed product information by ID
- Clean and structured API responses
- Easy to extend and modify

## API Endpoints

### Get All Products

```bash
    GET /api/products
```

Returns an array of products with essential information including ID, name, price, stock, category, tags, reveiws and averageRatings

### Get Product by ID

```bash
    GET /api/product/:id
```

Return detialed information for a specific product

## Technologies Used

- Node.js
- Express.js
- JavaScript
