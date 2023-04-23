//calling product model
const Product = require("../models/product_model");

//controller to get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(201).json({ products });
  } catch (error) {
    res.json({ error });
  }
};

//controller to create new product
exports.createProduct = async (req, res) => {
  try {
    const product_ = await Product.create(req.body);
    res.status(201).json({ product_ });
  } catch (error) {
    res.json({ error });
  }
};

//controller to update product quantity
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      const qty = req.query.qty;
      const data = {
        name: product.name,
        quantity: product.quantity + Number(qty),
      };
      const product_ = await Product.findByIdAndUpdate(product._id, data);
      res.status(201).json({ message: "product Updated" });
    } else {
      res.status(404).json({ message: "Product Not Found" });
    }
  } catch (error) {
    res.json({ error });
  }
};

//controller to delete product
exports.deleteProduct = async (req, res) => {
  try {
    let product_ = await Product.findOne({ _id: req.params.id });
    if (product_) {
      await Product.deleteOne({ _id: product_._id });
      res.status(201).json({ message: "Product Deleted" });
    } else {
      res.status(404).json({ message: "Product Not Found" });
    }
  } catch (error) {
    res.json(error);
  }
};
