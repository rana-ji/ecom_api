//creating routes for CRUD and importing the respective controller
const express = require("express");
const {
  createProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
} = require("../controller/product_controller");
const productRouter = express.Router();

//defining the routes
productRouter.get("/product", getAllProducts);
productRouter.post("/product/create", createProduct);
productRouter.delete("/product/:id", deleteProduct);
productRouter.post("/product/update/:id", updateProduct);

//exporting the routes
module.exports = productRouter;
