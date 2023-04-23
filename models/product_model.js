//using mongoose for creting the product schema
const mongoose = require("mongoose");

//creating product schema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

//defining the model
const Product = mongoose.model("Product", productSchema);

//exporting the schema model
module.exports = Product;
