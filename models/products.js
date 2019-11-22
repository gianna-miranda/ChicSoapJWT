const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
	product_title: { type: String },
	Description: { type: Number },
	product_class: { type: String }
	
});

const Products = mongoose.model("Products", ProductsSchema);

module.exports = Products;