const { Router } = require('express');
const { body, param } = require('express-validator');
const {
	listProducts,
	getProductById,
	createProduct,
	updateProduct,
	deleteProduct,
} = require('../controllers/products.controller');
const validate = require('../middlewares/validate');

const router = Router();

// Listar todos y obtener por id (acceso público)
router.get('/', listProducts);
router.get(
	'/:id',
	[param('id').isMongoId().withMessage('ID inválido')],
	validate,
	getProductById
);

// Crear producto
router.post(
	'/',
	[
		body('name').isString().notEmpty(),
		body('price').isNumeric().custom((v) => v >= 0),
		body('description').optional().isString(),
		body('category').optional().isString(),
		body('inStock').optional().isBoolean(),
	],
	validate,
	createProduct
);

// Actualizar producto
router.put(
	'/:id',
	[
		param('id').isMongoId(),
		body('name').optional().isString().notEmpty(),
		body('price').optional().isNumeric().custom((v) => v >= 0),
		body('description').optional().isString(),
		body('category').optional().isString(),
		body('inStock').optional().isBoolean(),
	],
	validate,
	updateProduct
);

// Borrar producto
router.delete(
	'/:id',
	[param('id').isMongoId()],
	validate,
	deleteProduct
);

module.exports = router;

