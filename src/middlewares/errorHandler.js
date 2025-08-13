module.exports = (err, req, res, next) => {
	console.error(err);
	if (err.name === 'ValidationError') {
		return res.status(400).json({ error: err.message });
	}
	return res.status(500).json({ error: 'Error interno del servidor' });
};

