const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const productsRoutes = require('./routes/products.routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
	return res.json({ ok: true, message: 'API de Productos funcionando' });
});

app.use('/api/products', productsRoutes);

// 404
app.use((req, res) => {
	return res.status(404).json({ error: 'Ruta no encontrada' });
});

// Error handler
const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);

module.exports = app;

