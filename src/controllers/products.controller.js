const Product = require('../models/product.model');

const listProducts = async (req, res, next) => {
	try {
		const products = await Product.find().lean();
		return res.json(products);
	} catch (error) {
		next(error);
	}
};

const getProductById = async (req, res, next) => {
	try {
		const { id } = req.params;
		const product = await Product.findById(id).lean();
		if (!product) return res.status(404).json({ error: 'Producto no encontrado' });
		return res.json(product);
	} catch (error) {
		next(error);
	}
};

const createProduct = async (req, res, next) => {
	try {
		const product = await Product.create(req.body);
		return res.status(201).json(product);
	} catch (error) {
		next(error);
	}
};

const updateProduct = async (req, res, next) => {
	try {
		const { id } = req.params;
		const updated = await Product.findByIdAndUpdate(id, req.body, {
			new: true,
			runValidators: true,
		}).lean();
		if (!updated) return res.status(404).json({ error: 'Producto no encontrado' });
		return res.json(updated);
	} catch (error) {
		next(error);
	}
};

const deleteProduct = async (req, res, next) => {
	try {
		const { id } = req.params;
		const deleted = await Product.findByIdAndDelete(id).lean();
		if (!deleted) return res.status(404).json({ error: 'Producto no encontrado' });
		return res.status(204).send();
	} catch (error) {
		next(error);
	}
};

module.exports = {
	listProducts,
	getProductById,
	createProduct,
	updateProduct,
	deleteProduct,
};

