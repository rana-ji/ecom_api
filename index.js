//creating the express server
const express = require("express");
const app = express();

//defining the port
const PORT = 5001;

//connecting with database
const db = require("./config/mongoose");

//calling the product routes
const productRoute = require("./routes/product_routes");

app.use(express.json());

//using the product routes
app.use(productRoute);

//checking if server is working properly or not
app.listen(PORT, function () {
  console.log(`Server is running at http://localhost:${PORT}`);
});
