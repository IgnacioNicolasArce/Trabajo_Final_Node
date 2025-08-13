const mongoose = require('mongoose');

const connectToDatabase = async (mongoUri) => {
	const uri = mongoUri || 'mongodb://127.0.0.1:27017/productos_api';

	mongoose.set('strictQuery', true);
	await mongoose.connect(uri, { autoIndex: true });
	console.log('MongoDB conectado');
};

module.exports = { connectToDatabase };

