# E-commerce Product API

This is a basic RESTful API for managing products in an e-commerce platform.

## Tech Stack

*   **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
*   **Express**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

## ENV
Create one .env file in root of the folder with this variables
* MONGODB_URI="YOUR_MONGODB_URI"
* PORT=3000

## How to Run the Project

1.  Install the dependencies:
    ```bash
    npm install
    ```

2.  Start the server:
    ```bash
    npm start
    ```

    The server will be running at `http://localhost:3000`.

## Sample cURL Requests

### Get all products

```bash
curl http://localhost:3000/products
```

### Get a single product by ID

```bash
curl http://localhost:3000/products/1
```

### Filter products by category

```bash
curl http://localhost:3000/products?category=Apparel
```

### Add a new product

```bash
curl -X POST -H "Content-Type: application/json" -d '{
    "name": "New Product",
    "category": "New Category",
    "price": 100,
    "in_stock": true
}' http://localhost:3000/products
``` 