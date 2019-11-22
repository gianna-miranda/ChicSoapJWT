const router = require("express").Router();
let Products = require("../models/products");

router.get("/products", async (req, res) => {
  try {
    const products = await Products.find({});
    res.send(products);
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;