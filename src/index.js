require('dotenv').config();
const app = require('./app');
const { connectToDatabase } = require('./config/db');

const PORT = process.env.PORT || 3000;

(async () => {
	try {
		await connectToDatabase(process.env.MONGODB_URI);
		app.listen(PORT, () => {
			console.log(`Servidor escuchando en puerto ${PORT}`);
		});
	} catch (err) {
		console.error('Error al iniciar la aplicación', err);
		process.exit(1);
	}
})();

